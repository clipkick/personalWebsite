import { Schema } from 'mongoose';

const pointSchema = new Schema({ id: Number, name: String, value: String });

const skillSchema = new Schema({ id: Number, skill: String, percent: Number });

const interestSchema = new Schema({
  id: Number,
  interest: String,
  iconClass: String,
  color: String,
});

export const aboutSchema = new Schema(
  {
    primer: { type: String, required: 'primer is required' },
    leftPoint: [pointSchema],
    rightPoint: [pointSchema],
    fullDescription: { type: String },
    skills: [skillSchema],
    interests: [interestSchema],
  },
  { collection: 'about' }
);
