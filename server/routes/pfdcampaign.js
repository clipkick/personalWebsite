import express from 'express';
import { getAllCampaigns, getCampaignById } from '../api/pfdCampaign';

const app = (module.exports = express());

app.route('/api/campaign').get(async (req, res) => {
  try {
    const campaignData = await getAllCampaigns();
    res.statusCode = 200;
    res.send(campaignData);
  } catch (error) {
    res.statusCode = 500;
    console.log(error);
    res.send(error);
  }
});

app.route('/api/:campaignId/details').get(async (req, res) => {
  try {
    const campaignData = await getCampaignById(req.params.campaignId);
    res.statusCode = 200;
    res.send(campaignData);
  } catch (error) {
    res.statusCode = 500;
    console.log(error);
    res.send(error);
  }
});
