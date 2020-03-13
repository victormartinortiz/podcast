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
    <Head>
      <title>{pageHead}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta
        name='description'
        content='Victor Podcasts is a new podcast player for Android users, where they can discover and listen to the world’s podcasts.'
      />
      <link href='/static/manifest.json' rel='manifest' />
      <meta name='theme-color' content='#8756ca' />
      <link rel='shortcut icon' href='/static/icon.png' />
      <link rel='apple-touch-icon' href='/icon.png' />

      <meta name='apple-mobile-web-app-title' content='Recetas' />
      <meta name='apple-mobile-web-app-capable' content='no' />
      <meta name='apple-mobile-web-app-status-bar-style' content='#181818' />
    </Head>
    <Header pageHeader={pageHeader} />
    {children}
  </>
);

export default Layout;
