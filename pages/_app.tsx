import { Empty } from '@/Componets/layout/empty';
import { AppPropsWithLayout } from '@/Models';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? Empty;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
