import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Header title={title}/>
    {children}
  </>
);

export default Layout;
