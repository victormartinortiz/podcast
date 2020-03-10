import React from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import Header from '../Header/index';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const Layout = ({ children, pageHead, pageHeader }) => (
  <>
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Victor Podcasts is a new podcast player for Android users, where they can discover and listen to the world’s podcasts."
        />
        <title>{pageHead}</title>
      </Head>
      <Header pageHeader={pageHeader} />
      {children}
    </html>
  </>
);

export default Layout;
