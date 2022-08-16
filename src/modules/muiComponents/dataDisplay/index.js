import React from 'react';
import {RoutePermittedRole} from '../../../shared/constants/AppConst';

export const dataDisplayConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/db-display/avatars',
    component: React.lazy(() => import('./Avatar')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/db-display/badges',
    component: React.lazy(() => import('./Badges')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/db-display/chips',
    component: React.lazy(() => import('./Chips')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/db-display/divider',
    component: React.lazy(() => import('./Divider')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/db-display/lists',
    component: React.lazy(() => import('./Lists')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/db-display/tables',
    component: React.lazy(() => import('./Table')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/db-display/tooltip',
    component: React.lazy(() => import('./Tooltip')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/db-display/typography',
    component: React.lazy(() => import('./Typography')),
  },
];
