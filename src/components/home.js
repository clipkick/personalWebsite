import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="About">About</Link>
        <Link to="Haha">HAHAHAHAHA</Link>
        <Link to="Events">Events</Link>
        <Link to="Contact">Contact</Link>
        <a href="/pathfinder">pathfinder</a>
      </nav>
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
