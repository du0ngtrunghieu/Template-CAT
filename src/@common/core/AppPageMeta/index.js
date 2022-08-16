import React from 'react';
import PropTypes from 'prop-types';
import {NextSeo} from 'next-seo';

const SITE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://heathcliff.vercel.app';

const defaultTitle = 'CÔNG AN TỈNH THỪA THIÊN HUẾ';
const defaultDescription =
  'TRANG THÔNG TIN ĐIỆN TỬ CÔNG AN TỈNH THỪA THIÊN HUẾ';
const defaultImage =
  'https://cdn.mastersindia.co/custom_pages/img/Masters India_GST_Software.svg';
const defaultSep = ' | ';

const AppPage = ({children, ...rest}) => {
  const {
    title,
    description,
    image,
    category = 'cong-an-tinh',
    tags = ['cong-an', 'cong-an-thua-thien-hue'],
  } = rest;
  const theTitle = title
    ? title?.length > 48
      ? title
      : title + defaultSep + defaultTitle
    : defaultTitle;
  const theDescription = description
    ? description.substring(0, 155)
    : defaultDescription;
  const theImage = image ? `${SITE_URL}${image}` : defaultImage;

  return (
    <>
      <NextSeo
        title={theTitle}
        description={theDescription}
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://www.url.ie/a',
          title: theTitle,
          description: theDescription,
          images: [
            {
              url: theImage,
              width: 800,
              height: 600,
              alt: 'Cong-an-tinh',
              type: 'image/jpeg',
            },
            {
              url: theImage,
              width: 900,
              height: 800,
              alt: 'Cong-an-tinh',
              type: 'image/jpeg',
            },
          ],
          site_name: 'cong-an-tinh',
        }}
        tags={tags}
        category={category}
      />
      {children}
    </>
  );
};

export default AppPage;

AppPage.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};
