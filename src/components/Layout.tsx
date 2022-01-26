import Head from 'next/head';
import Footer from './Footer';

interface PropTypes {
  title: string;
  children?: React.ReactNode;
}

function Layout({ title, children }: PropTypes) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-full bg-black">
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
