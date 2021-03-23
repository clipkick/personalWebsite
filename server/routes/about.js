import express from 'express';
import { getAbout } from '../api/about';

const app = (module.exports = express());

app.route('/api/about').get(async (req, res) => {
  try {
    const aboutData = await getAbout();
    res.statusCode = 200;
    res.send(aboutData);
  } catch (error) {
    res.statusCode = 500;
    console.log(error);
    res.send(error);
  }
});
