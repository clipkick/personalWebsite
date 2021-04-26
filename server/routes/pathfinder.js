import express from 'express';

import Campaigns from './pfdcampaign';
import Maps from './pfdMap';
import Characters from './pdfcharacter';

const app = (module.exports = express());

app.use(Campaigns);
app.use(Maps);
app.use(Characters);
