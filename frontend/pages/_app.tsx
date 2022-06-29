import '../styles/globals.css';
import Layout from '../components/layout';
import type { AppProps } from 'next/app';
import { MotionConfig } from 'framer-motion';

function OSAIWebApp({ Component, pageProps }: AppProps) {
  return (
    <MotionConfig reducedMotion='user'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MotionConfig>
  );
}

export default OSAIWebApp;
