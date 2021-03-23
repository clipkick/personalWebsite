import express from 'express';

import Contact from './contact';
import About from './about';
import Resume from './resume';

const app = (module.exports = express());

app.use(Contact);
app.use(About);
app.use(Resume);
