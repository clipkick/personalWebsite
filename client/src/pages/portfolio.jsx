import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import PortfolioItem from '../components/portfolioItem';

export default function Portfolio() {
  const [portfolioClass, setClass] = useState('portfolio');
  const [portfolioItems, setPortfolioItems] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('/api/portfolio');
      setPortfolioItems(response.data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setTimeout(() => {
      setClass('portfolio section-show');
    }, 100);
  }, []);
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!portfolioItems) return <h1>Loading...</h1>;
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
        <div className="row portfolio-container">
          {portfolioItems.map((item) => (
            <PortfolioItem key={item._id} stateFunction={setClass} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
