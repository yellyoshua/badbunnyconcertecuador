import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import '../src/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
