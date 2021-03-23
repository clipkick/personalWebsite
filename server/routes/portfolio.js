import express from 'express';
import { getAllPortfolioItems } from '../api/portfolio';

const app = (module.exports = express());

app.route('/api/portfolio').get(async (req, res) => {
  try {
    const portfolioData = await getAllPortfolioItems();
    res.statusCode = 200;
    res.send(portfolioData);
  } catch (error) {
    res.statusCode = 500;
    console.log(error);
    res.send(error);
  }
});
