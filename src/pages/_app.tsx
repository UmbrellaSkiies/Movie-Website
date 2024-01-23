// pages/_app.tsx
import { AppProps } from 'next/app';
import { Providers } from '../../context/redux.provider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
