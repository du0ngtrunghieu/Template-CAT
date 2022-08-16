import React from 'react';
import {RoutePermittedRole} from '../../../shared/constants/AppConst';

export const utilConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/click-away-listener',
    component: React.lazy(() => import('./ClickawayListener')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/modal/',
    component: React.lazy(() => import('./Modal')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/NoSSR1/',
    component: React.lazy(() => import('./NoSSR1')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/Popover/',
    component: React.lazy(() => import('./Popover')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/Popper/',
    component: React.lazy(() => import('./Popper')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/Portal/',
    component: React.lazy(() => import('./Portal')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/Text/',
    component: React.lazy(() => import('./Text')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/Transitions/',
    component: React.lazy(() => import('./Transitions')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/MediaQuery/',
    component: React.lazy(() => import('./MediaQuery')),
  },
];
