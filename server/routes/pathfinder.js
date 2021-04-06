import express from 'express';

import Campaigns from './pfdcampaign';
import Maps from './pfdMap';

const app = (module.exports = express());

app.use(Campaigns);
app.use(Maps);
