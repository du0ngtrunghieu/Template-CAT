import React from 'react';
import List from '@mui/material/List';

import routesConfig from '../../../../../modules/routesConfig';
import NavVerticalGroup from './VerticalNavGroup';
import VerticalCollapse from './VerticalCollapse';
import VerticalItem from './VerticalItem';
import {useRouter} from 'next/router';

const VerticalNav = () => {
  const router = useRouter();
  return (
    <List
      sx={{
        position: 'relative',
        padding: 0,
      }}
      component='div'
    >
      {routesConfig.map((item) => (
        <React.Fragment key={item.id}>
          {item.type === 'group' && (
            <NavVerticalGroup item={item} level={0} router={router} />
          )}

          {item.type === 'collapse' && (
            <VerticalCollapse item={item} level={0} router={router} />
          )}

          {item.type === 'item' && (
            <VerticalItem item={item} level={0} router={router} />
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

export default VerticalNav;
