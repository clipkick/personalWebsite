import mongoose from 'mongoose';
import { campaignModel } from '../models/pfdCampaignModel';

const pathfinderConnection = mongoose.connection.useDb('pathfinder');
const Campaign = pathfinderConnection.model('campaign', campaignModel);

export const getAllCampaigns = async () => {
  let campaign = await Campaign.find({}, { _id: 1, title: 1 });
  return campaign;
};

export const getCampaignById = async (id) => {
  let campaign = await Campaign.findById(id);
  return campaign;
};
