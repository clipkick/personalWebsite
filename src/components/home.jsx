import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home Information</title>
        <link href="/css/style.css" rel="stylesheet" />
      </Helmet>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="/Pathfinder">Pathfinder</Link>
      </nav>
      <Outlet />
    </div>
  );
}
export function Haha() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="About">About</Link>
        <Link to="Events">Events</Link>
        <Link to="Contact">Contact</Link>
        <a href="/pathfinder">pathfinder</a>
      </nav>
      lolololo
    </div>
  );
}
