import '../styles/global.css';

import type { AppProps } from 'next/app';
import { StrictMode } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StrictMode>
    <Component {...pageProps} />
  </StrictMode>
);

export default MyApp;
