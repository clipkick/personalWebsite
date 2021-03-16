import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, Outlet } from 'react-router-dom';

import Header from '../components/header';

export default function Home() {
  let isTop = false;
  const loaction = useLocation().pathname;
  if (loaction !== '/') {
    isTop = true;
  }
  return (
    <>
      <Helmet>
        <title>Adam Sanderson&apos;s Website</title>
        <link href="/css/style.css" rel="stylesheet" />
      </Helmet>
      <Header isTop={isTop} />
      <Outlet />
    </>
  );
}
