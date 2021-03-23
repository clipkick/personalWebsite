import express from 'express';

import Contact from './contact';
import About from './about';

const app = (module.exports = express());

app.use(Contact);
app.use(About);
