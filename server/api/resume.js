import mongoose from 'mongoose';
import { resumeItemSchema } from '../models/resumeItemModel';

const ResumeItem = mongoose.model('ResumeItem', resumeItemSchema);

export const getResumeItemByType = async (itemType) => {
  let items = await ResumeItem.find({ type: itemType }).sort({ lastDate: -1 });
  return items;
};
export const getAllResumeItems = async () => {
  let items = await ResumeItem.find().sort({ lastDate: -1 });
  return items;
};
