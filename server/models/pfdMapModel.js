import { Schema } from 'mongoose';

export const mapModel = new Schema({
  title: { type: String, required: 'Title is required' },
  campaignId: { type: String, required: 'Map not assioated with Campaign' },
  description: { type: String },
  fileName: { type: String, required: 'Cannot have a map without a map file' },
});
