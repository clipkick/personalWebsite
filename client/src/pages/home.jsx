import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, Outlet } from 'react-router-dom';

import Header from '../components/header';
import Credits from '../components/credits';

const displayCredits = () => {
  const loaction = useLocation().pathname;
  if (loaction !== '/' && loaction !== '/portfolio') {
    return <Credits />;
  }
  return '';
};
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
      {displayCredits()}
    </>
  );
}
