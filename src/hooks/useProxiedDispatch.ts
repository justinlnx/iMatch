import React, { useMemo } from 'react';

/**
 * Creates a proxy around a standard dispatch function that takes action objects in the shape:
 * {
 *   type: 'actionName',
 *   params: [param1, param2, ...]
 * }
 * And allows them to be invoked as functions, in the syntax:
 *   dispatch.actionName(param1, param2);
 */
function createDispatchHandler() {
  const functionCache: any = {};
  return {
    get(dispatch: React.Dispatch<any>, type: string) {
      if (!functionCache[type]) {
        /* The first time a function is referenced via the proxy, we create
         * a custom function handler for it and stash it. That way when
         * the proxied function is referenced in the future, the proxy can
         * return a function reference that is invariant. This is important
         * to prevent unnecessarily rerenderring, rerunning effects, etc.
         */

        /*
         * IDEA - it might be nice to be able to pass in a function that can
         * customize this way the proxy maps function arguments into an
         * action object
         */
        const fn = (...params: any) => dispatch({
          type,
          params,
        });
        functionCache[type] = fn;
      }
      return functionCache[type];
    },
  };
}

function createDispatchProxy(dispatch: React.Dispatch<any>) {
  const dispatchHandler = createDispatchHandler();
  return new Proxy(dispatch, dispatchHandler);
}

/**
 * Returns a memoized function that proxies a Redux/useReducer dispatch
 * function to allow dispatch methods to be invoked with some convenient
 * syntactic sugar.
 *
 *      const [state, dispatch] = useReducer(reducer, initialState);
 *      const proxiedDispatch = useProxiedDispatch(dispatch);
 *
 *      dispatch({ type: 'increment', params: [1, true] }); // without proxied dispatch
 *      proxiedDispatch.increment(1, true); // same as above, but using proxied dispatch
 *
 * @param {function} dispatch - A dispatch function that expects to receive an
 * object in the shape of `{ type: 'actionName', params: [...] }`
 */
const useProxiedDispatch = (dispatch: React.Dispatch<any>) => useMemo(
  () => createDispatchProxy(dispatch),
  [dispatch],
);

export default useProxiedDispatch;
