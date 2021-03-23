import { Schema } from 'mongoose';

const imageSchema = new Schema({ id: Number, src: String });

const linkSchema = new Schema({ id: Number, href: String });

export const portfolioSchema = new Schema({
  title: { type: String },
  links: [linkSchema],
  images: [imageSchema],
  description: { type: String },
});
