import { Schema } from 'mongoose';

export const characterModel = new Schema({
  name: { type: String, required: 'Name is required for character' },
  campaignId: { type: String, required: 'Characters must be assioated with a campaign' },
  characterKnown: { type: Boolean, default: false },
  knownBackground: { type: String },
  background: { type: String },
  phisicalDescription: {
    type: String,
    required: 'At least put male/female in the Physical Description',
  },
  characterImage: { type: String },
  characterFilename: { type: String },
  characterLink: { type: String },
  characterText: { type: String },
  affiliationsKnown: [String],
  affiliations: [String],
  dateCreated: { type: Date, default: new Date() },
});
