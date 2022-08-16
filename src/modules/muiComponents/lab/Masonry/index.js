import React from 'react';
import AppComponentHeader from '@common/core/AppComponentHeader';
import AppGridContainer from '@common/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@common/core/AppComponentCard';

import BasicMasonry from './BasicMasonry';
import BasicMasonrySource from '!raw-loader!./BasicMasonry';

import ImageMasonry from './ImageMasonry';
import ImageMasonrySource from '!raw-loader!./ImageMasonry';

import FixedColumns from './FixedColumns';
import FixedColumnsSource from '!raw-loader!./FixedColumns';

import ResponsiveColumns from './ResponsiveColumns';
import ResponsiveColumnsSource from '!raw-loader!./ResponsiveColumns';

import FixedSpacing from './FixedSpacing';
import FixedSpacingSource from '!raw-loader!./FixedSpacing';

import ResponsiveSpacing from './ResponsiveSpacing';
import ResponsiveSpacingSource from '!raw-loader!./ResponsiveSpacing';

import SSRMasonry from './SSRMasonry';
import SSRMasonrySource from '!raw-loader!./SSRMasonry';

const Masonry = () => {
  return (
    <>
      <AppComponentHeader
        title='Masonry'
        description='Masonry lays out contents of different sizes as blocks of the same width and variable height with configurable gaps.'
        refUrl='https://mui.com/components/masonry/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FixedColumns'
            component={FixedColumns}
            source={FixedColumnsSource}
            noScrollbar
            description='This example demonstrates the use of the columns to configure the number of columns of a Masonry.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ResponsiveColumns'
            component={ResponsiveColumns}
            source={ResponsiveColumnsSource}
            noScrollbar
            description='columns accepts responsive values:'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FixedSpacing'
            component={FixedSpacing}
            source={FixedSpacingSource}
            noScrollbar
            description='This example demonstrates the use of the spacing to configure the spacing between items. It is important to note that the value provided to the spacing prop is multiplied by the themes spacing field.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ResponsiveSpacing'
            component={ResponsiveSpacing}
            source={ResponsiveSpacingSource}
            noScrollbar
            description='spacing accepts responsive values:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='BasicMasonry'
            component={BasicMasonry}
            source={BasicMasonrySource}
            noScrollbar
            description='A simple example of a Masonry. Masonry is a container for one or more items. It can receive any element including <div /> and <img />.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='SSRMasonry'
            component={SSRMasonry}
            source={SSRMasonrySource}
            noScrollbar
            description='This example demonstrates the use of the defaultHeight, defaultColumns and defaultSpacing, which are used to support server-side rendering.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ImageMasonry'
            component={ImageMasonry}
            source={ImageMasonrySource}
            noScrollbar
            description='This example demonstrates the use of Masonry for images. Masonry orders its children by row. If youd like to order images by column, check out ImageList.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Masonry;
