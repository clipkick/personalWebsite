import express from 'express';
import sendEmail from '../api/contact';

const app = (module.exports = express());

app.post('/api/contact', (req, res) => {
  try {
    // validate input here
    const emailOptions = req.body;
    if (
      !emailOptions.name ||
      !emailOptions.email ||
      !emailOptions.subject ||
      !emailOptions.message
    ) {
      throw new Error('not a proper email');
    } else {
      sendEmail(req.body);
      res.json(req.body);
    }
    // sendEmail(req.body);
  } catch (error) {
    res.statusCode = 500;
    res.send(error.message);
  }
});
