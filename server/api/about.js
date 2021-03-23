import mongoose from 'mongoose';
import { aboutSchema } from '../models/aboutModel';

const About = mongoose.model('About', aboutSchema);

export const getAbout = async () => {
  let about = await About.findById('6054a6d5919f02ab474228ba');
  return about;
};
