import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

import useWindowDimensions from '../../windowDimension';

function mobileClick(event, width) {
  if (typeof window !== 'undefined') {
    if (width < 992) {
      let mobleNav = document.querySelector('.mobile-nav-toggle');
      document.querySelector('#navbar').classList.toggle('mobile');
      mobleNav.classList.toggle('bi-list');
      mobleNav.classList.toggle('bi-x');
    }
  }
}

export default function Header() {
  const { width } = useWindowDimensions();
  let activeHome;
  if ((useLocation().pathname == '/pathfinder') | (useLocation().pathname == '/pathfinder/'))
    activeHome = 'active';
  return (
    <header id="header">
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <Link
              className={activeHome}
              to="/pathfinder"
              onClick={(event) => {
                mobileClick(event, width);
              }}
            >
              Select Camapign
            </Link>
          </li>
          <li>
            <NavLink
              to="characters"
              activeClassName="active"
              onClick={(event) => {
                mobileClick(event, width);
              }}
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="maps"
              activeClassName="active"
              onClick={(event) => {
                mobileClick(event, width);
              }}
            >
              Maps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="history"
              activeClassName="active"
              onClick={(event) => {
                mobileClick(event, width);
              }}
            >
              History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="details"
              activeClassName="active"
              onClick={(event) => {
                mobileClick(event, width);
              }}
            >
              Campaign Details
            </NavLink>
          </li>
        </ul>
        <i
          className="bi bi-list mobile-nav-toggle"
          onClick={(event) => {
            mobileClick(event, width);
          }}
        ></i>
      </nav>
    </header>
  );
}
