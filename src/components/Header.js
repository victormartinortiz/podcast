import React from 'react';
import Link from 'next/link';
import '../assets/styles/components/Header.scss'

const Header = ({ title }) => (
  <header>
    <Link href='/'>
      <a>{title}</a>
    </Link>
  </header>
);

export default Header;
