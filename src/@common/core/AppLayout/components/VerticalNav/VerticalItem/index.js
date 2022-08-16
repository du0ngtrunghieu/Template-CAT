import React, {useMemo} from 'react';
import {Icon, ListItemText} from '@mui/material';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import AppBadge from '@common/core/AppBadge';
import Link from 'next/link';
import Box from '@mui/material/Box';
import IntlMessages from '../../../../../utility/IntlMessages';
import {checkPermission} from '../../../../../utility/helper/RouteHelper';
import {useAuthUser} from '../../../../../utility/AuthHooks';
import VerticalNavItem from './VerticalNavItem';

const VerticalItem = ({level, router, item}) => {
  const {user} = useAuthUser();
  const hasPermission = useMemo(
    () => checkPermission(item.permittedRole, user.role),
    [item.permittedRole, user.role],
  );
  if (!hasPermission) {
    return null;
  }

  return (
    <Link href={item.url} as={item.as}>
      <a style={{textDecoration: 'none'}}>
        <VerticalNavItem
          item={item}
          level={level}
          router={router}
          exact={item.exact}
        >
          {item.icon && (
            <Box component='span'>
              <Icon
                sx={{
                  fontSize: 18,
                  display: 'block',
                  mr: 4,
                }}
                className={clsx('nav-item-icon', 'material-icons-outlined')}
                color='action'
              >
                {item.icon}
              </Icon>
            </Box>
          )}
          <ListItemText
            className='nav-item-content'
            primary={<IntlMessages id={item.messageId} />}
            classes={{primary: 'nav-item-text'}}
          />
          {item.count && (
            <Box sx={{mr: 3.5}} className='menu-badge'>
              <AppBadge count={item.count} color={item.color} />
            </Box>
          )}
        </VerticalNavItem>
      </a>
    </Link>
  );
};

VerticalItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    permittedRole: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    exact: PropTypes.bool,
    messageId: PropTypes.string,
    count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    url: PropTypes.string,
    color: PropTypes.string,
    as: PropTypes.string,
  }),
  level: PropTypes.number,
  router: PropTypes.object,
};

VerticalItem.defaultProps = {};

export default React.memo(VerticalItem);
