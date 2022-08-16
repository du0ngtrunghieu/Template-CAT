import React from 'react';
import {RoutePermittedRole} from '../../../shared/constants/AppConst';

export const dataGridConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/overview',
    component: React.lazy(() => import('./Overview')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/layout',
    component: React.lazy(() => import('./Layout')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/columns',
    component: React.lazy(() => import('./Columns')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/rows',
    component: React.lazy(() => import('./Rows')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/editing',
    component: React.lazy(() => import('./Editing')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/sorting',
    component: React.lazy(() => import('./Sorting')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/filtering',
    component: React.lazy(() => import('./Filtering')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/pagination',
    component: React.lazy(() => import('./Pagination')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/selection',
    component: React.lazy(() => import('./Selection')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/selection',
    component: React.lazy(() => import('./Selection')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/events',
    component: React.lazy(() => import('./Events')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/export',
    component: React.lazy(() => import('./Export')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/components',
    component: React.lazy(() => import('./Components')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/styling',
    component: React.lazy(() => import('./Styling')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/localization',
    component: React.lazy(() => import('./Localization')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/scrolling',
    component: React.lazy(() => import('./Scrolling')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/virtualization',
    component: React.lazy(() => import('./Virtualization')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-grid/accessibility',
    component: React.lazy(() => import('./Accessibility')),
  },
];
