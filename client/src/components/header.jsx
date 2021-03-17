import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useWindowDimensions from '../windowDimension';

function mobileClick(event, width) {
  if (typeof window !== 'undefined') {
    if (width < 992) {
      let mobleNav = document.querySelector('.mobile-nav-toggle');
      console.log(mobleNav.style);
      document.querySelector('#navbar').classList.toggle('navbar-mobile');
      mobleNav.classList.toggle('bi-list');
      mobleNav.classList.toggle('bi-x');
    }
  }
}

export default function Header({ isTop }) {
  const { width } = useWindowDimensions();
  // useEffect(() => {
  //   const header = document.querySelector('#header');
  //   if (isTop) {
  //     if (!header.classList.contains('header-top')) header.classList.add('header-top');
  //   } else if (header.classList.contains('header-top')) header.classList.remove('header-top');
  // });
  let headerClass, activeHome;
  if (isTop) {
    headerClass = 'header-top';
  } else {
    // doing this to get around Home always being active
    activeHome = 'active';
  }

  return (
    <header id="header" className={headerClass}>
      <div className="container">
        <h1>
          <Link to="/">Adam Sanderson</Link>
        </h1>
        <h2>
          I&apos;m a passionate <span>full stack developer</span> from Thunder Bay, Canada
        </h2>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              {/* can't use navLink due to / using outlet. Would always be considered active */}
              <Link
                className={activeHome}
                to="/"
                onClick={(event) => {
                  mobileClick(event, width);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={(event) => {
                  mobileClick(event, width);
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                onClick={(event) => {
                  mobileClick(event, width);
                }}
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                onClick={(event) => {
                  mobileClick(event, width);
                }}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={(event) => {
                  mobileClick(event, width);
                }}
              >
                Contact
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
      </div>
    </header>
  );
}

Header.propTypes = {
  isTop: PropTypes.bool,
};
