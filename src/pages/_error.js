import asyncComponent from '../@common/utility/asyncComponent';

export default asyncComponent(() =>
  import('../modules/errorPages/Error404/index'),
);
