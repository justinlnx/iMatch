type Action = {
  type: string,
  params?: string[],
}

export default function createReducer<T>(actions: any) {
  return (state: T, action: Action) => {
    const { type, params = [] } = action;
    const reducer = actions[type];

    if (reducer) {
      return reducer(state, ...params);
    }

    return state;
  };
};
