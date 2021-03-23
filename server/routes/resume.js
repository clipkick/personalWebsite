import express from 'express';
import { getResumeItemByType, getAllResumeItems } from '../api/resume';

const app = (module.exports = express());

app.route('/api/resume').get(async (req, res) => {
  try {
    const resumeData = await getAllResumeItems();
    res.statusCode = 200;
    res.send(resumeData);
  } catch (error) {
    res.statusCode = 500;
    console.log(error);
    res.send(error);
  }
});

app.route('/api/resume/:type').get(async (req, res) => {
  try {
    const resumeData = await getResumeItemByType(req.params.type);
    res.statusCode = 200;
    res.send(resumeData);
  } catch (error) {
    res.statusCode = 500;
    console.log(error);
    res.send(error);
  }
});
