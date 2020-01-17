import React from 'react';
import Link from 'next/link';
import '../assets/styles/components/Header.scss'

const Header = ({ pageHeader }) => (
  <header>
    <Link href='/'>
      <a>{pageHeader}</a>
    </Link>
  </header>
);

export default Header;
