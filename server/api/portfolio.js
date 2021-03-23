import mongoose from 'mongoose';
import { portfolioSchema } from '../models/portfolioItemModel';

const PortfolioItem = mongoose.model('PortfolioItem', portfolioSchema);

export const getAllPortfolioItems = async () => {
  let items = await PortfolioItem.find();
  return items;
};
