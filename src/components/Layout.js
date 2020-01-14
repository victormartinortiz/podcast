import React from 'react';
import Head from 'next/head';
import Header from './Header';

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
