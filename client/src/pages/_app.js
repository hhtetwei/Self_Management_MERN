import '@/styles/globals.css';
import Head from 'next/head';
import Layout from './layout/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Cafes-In-Town</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
