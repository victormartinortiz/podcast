import React from 'react';
import Head from 'next/head';
import Header from './Header';
import NProgress from 'nprogress';
import Router from 'next/router';
import '../assets/styles/components/Layout.scss'

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const Layout = ({ children, pageHead, pageHeader }) => (
  <>
    <Head>
      <title>{pageHead}</title>
    </Head>
    <Header pageHeader={pageHeader}/>
    {children}
  </>
);

export default Layout;
