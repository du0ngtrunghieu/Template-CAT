import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider} from '@emotion/react';
import createEmotionCache from '../createEmotionCache';
import AppContextProvider from '../@common/utility/AppContextProvider';
import {Provider} from 'react-redux';
import AppThemeProvider from '../@common/utility/AppThemeProvider';
import AppStyleProvider from '../@common/utility/AppStyleProvider';
import AppLocaleProvider from '../@common/utility/AppLocaleProvider';
import AuthRoutes from '../@common/utility/AuthRoutes';
import {useStore} from '../redux/store'; // Client-side cache, shared for the whole session of the user in the browser.

import '../@common/services/index';
import '../shared/vendors/index.css';
import JWTAuthAuthProvider from '@common/services/auth/jwt-auth/JWTAuthProvider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
  const store = useStore(pageProps.initialReduxState);

  return (
    <CacheProvider value={emotionCache}>
      <AppContextProvider>
        <Provider store={store}>
          <AppThemeProvider>
            <AppStyleProvider>
              <AppLocaleProvider>
                <JWTAuthAuthProvider>
                  <AuthRoutes>
                    <CssBaseline />
                    <Component {...pageProps} />
                  </AuthRoutes>
                </JWTAuthAuthProvider>
              </AppLocaleProvider>
            </AppStyleProvider>
          </AppThemeProvider>
        </Provider>
      </AppContextProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
