import express from 'express';

import Contact from './contact';
import About from './about';
import Resume from './resume';
import Portfolio from './portfolio';

const app = (module.exports = express());

app.use(Contact);
app.use(About);
app.use(Resume);
app.use(Portfolio);
