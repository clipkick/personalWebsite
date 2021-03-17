import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import PortfolioItems from '../components/portfolioItems';

export default function Portfolio() {
  const [portfolioClass, setClass] = useState('portfolio');

  useEffect(() => {
    setTimeout(() => {
      setClass('portfolio section-show');
    }, 100);
  }, []);
  return (
    <section id="portfolio" className={portfolioClass}>
      <Helmet>
        <title>My Portfolio</title>
      </Helmet>
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>My Works</p>
        </div>
        <PortfolioItems stateFunction={setClass} />
      </div>
    </section>
  );
}
