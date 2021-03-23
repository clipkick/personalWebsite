import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Pathfinder</title>
        <link href="/css/stylePathfinder.css" rel="stylesheet" />
      </Helmet>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </div>
  );
}
