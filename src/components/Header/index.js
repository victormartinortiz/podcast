import React from 'react';
import Link from 'next/link';
import { HeaderStyle, HeaderLink } from './styles';

const Header = ({ pageHeader }) => (
  <HeaderStyle>
    <Link href='/'>
      <HeaderLink>{pageHeader}</HeaderLink>
    </Link>
  </HeaderStyle>
);

export default Header;
