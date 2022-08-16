import React from 'react';
import AppComponentHeader from '../../../../@common/core/AppComponentHeader';
import AppGridContainer from '../../../../@common/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@common/core/AppComponentCard';

import BasicBreadcrumbs from './BasicBreadcrumbs';
import BasicBreadcrumbsSource from '!raw-loader!./BasicBreadcrumbs';

import ActiveLastBreadcrumb from './ActiveLastBreadcrumb';
import ActiveLastBreadcrumbSource from '!raw-loader!./ActiveLastBreadcrumb';

import CustomSeparator from './CustomSeparator';
import CustomSeparatorSource from '!raw-loader!./CustomSeparator';

import CollapsedBreadcrumbs from './CollapsedBreadcrumbs';
import CollapsedBreadcrumbsSource from '!raw-loader!./CollapsedBreadcrumbs';

import CustomizedBreadcrumbs from './CustomizedBreadcrumbs';
import CustomizedBreadcrumbsSource from '!raw-loader!./CustomizedBreadcrumbs';

const BottomNavigation = () => {
  return (
    <>
      <AppComponentHeader
        title='Breadcrumbs'
        description='Breadcrumbs allow users to make selections from a range of values.'
        refUrl='https://mui.com/components/breadcrumbs/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Bottom Navigation'
            component={BasicBreadcrumbs}
            source={BasicBreadcrumbsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ActiveLast Breadcrumb'
            component={ActiveLastBreadcrumb}
            source={ActiveLastBreadcrumbSource}
            noScrollbar
            description='Keep the last breadcrumb interactive.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized Breadcrumbs'
            component={CustomizedBreadcrumbs}
            source={CustomizedBreadcrumbsSource}
            noScrollbar
            description='Here is an example of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Collapsed Breadcrumbs'
            component={CollapsedBreadcrumbs}
            source={CollapsedBreadcrumbsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Custom Separator'
            component={CustomSeparator}
            source={CustomSeparatorSource}
            noScrollbar
            description='In the following examples, we are using two string separators and an SVG icon.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default BottomNavigation;
