import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import HeadNext from '../components/layout/Head';
import Layout from '../components/layout/Layout';
import { theme } from '../styles/themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <HeadNext />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
);
}
export default MyApp;
