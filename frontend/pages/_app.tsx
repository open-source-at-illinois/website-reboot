import '../styles/globals.css';
import Layout from '../components/layout';
import type { AppProps } from 'next/app';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

function OSAIWebApp({ Component, pageProps }: AppProps) {
  return (
    <MotionConfig reducedMotion='user'>
      <ThemeProvider attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </MotionConfig>
  );
}

export default OSAIWebApp;
