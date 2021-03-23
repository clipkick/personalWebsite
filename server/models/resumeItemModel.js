import { Schema } from 'mongoose';

export const resumeItemSchema = new Schema({
  title: { type: String },
  date: { type: String },
  description: { type: String },
  list: { type: Array },
  lastDate: { type: Date },
});
