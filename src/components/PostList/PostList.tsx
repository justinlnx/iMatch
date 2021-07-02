import { useContext, useMemo } from 'react';

import SearchQueryContext from '../SearchQueryContextProvider';
import { mockPosts } from '../../mock';
import { COMPANY } from '../../constants';

const PostList = () => {
  const {
    locations,
    companies,
    role,
  } = useContext(SearchQueryContext);

  const filteredByLocation = useMemo(() => {
    return locations.length === 0
      ? mockPosts
      : mockPosts.filter((post) => locations.includes(post.location));
  }, [locations]);

  console.log('by location', filteredByLocation);

  const filteredByCompanies = useMemo(() => {
    return companies.length === 0
      ? filteredByLocation
      : filteredByLocation.filter((post) => companies.includes(post.company as COMPANY));
  }, [companies, filteredByLocation]);

  console.log('by companies', filteredByCompanies);

  const filteredByRole = useMemo(() => {
    if (!role) return filteredByCompanies;
    return filteredByCompanies.filter((post) => {
      if (!post.role) return true;
      return role.includes(post.role);
    });
  }, [role, filteredByCompanies]);

  console.log('by roles', filteredByRole);

  /**
   * @todo - to be implemented with post cards components
   * card component should be rendered when user clicks search? so the results dont render too many times
   */
  return (null);
};

export default PostList;
