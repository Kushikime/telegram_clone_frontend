import React, { FC } from 'react';
import type { AppProps } from 'next/app'

import { CacheProvider } from '@emotion/react';

import createEmotionCache from '../utility/createEmotionCache';
import { EmotionCache } from '@emotion/utils'
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store, { persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import Wrapper from '../components/Wrapper';
import CssBaseline from '@mui/material/CssBaseline';


const clientSideEmotionCache = createEmotionCache();

export interface IAppProps extends AppProps {
  emotionCache: EmotionCache
}


const MyApp: FC<IAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CacheProvider value={emotionCache}>
          <Wrapper />
          <CssBaseline />
          <Component {...pageProps} />
        </CacheProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
