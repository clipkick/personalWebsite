import { Schema } from 'mongoose';

export const campaignModel = new Schema({
  title: { type: String },
  startDate: { type: String },
  description: { type: String },
  players: { type: Array },
  GM: { type: String },
});
