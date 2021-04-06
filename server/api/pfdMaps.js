import mongoose from 'mongoose';
import fs from 'fs/promises';
import { mapModel } from '../models/pfdMapModel';

const pathfinderConnection = mongoose.connection.useDb('pathfinder');
const Map = pathfinderConnection.model('Map', mapModel);

export const getAllMaps = async (campaignId) => {
  let map = await Map.find({ campaignId }, { _id: 1, title: 1, fileName: 1 }).sort({ title: 1 });
  return map;
};

export const getMapById = async (id) => {
  let map = await Map.findById(id);
  return map;
};
export const addMap = async (mapFile, mapData) => {
  const map = new Map(mapData);
  const newFile = await fs.readFile(mapFile.destination + mapFile.filename);

  let path = 'static/img/pathfinder/' + map.campaignId + '/'; //+ mapFile.originalname;
  await fs.mkdir(path, { recursive: true });
  await fs.writeFile(path + mapFile.originalname, newFile);

  map.fileName = mapFile.originalname;
  await map.save();
  return map;
};

export const updateMap = async (mapId, mapData, mapFile) => {
  // let map = new Map(mapData);
  if (mapFile) {
    const newFile = await fs.readFile(mapFile.destination + mapFile.filename);

    let path = 'static/img/pathfinder/' + mapData.campaignId + '/'; //+ mapFile.originalname;
    await fs.mkdir(path, { recursive: true });
    await fs.writeFile(path + mapFile.originalname, newFile);

    mapData.fileName = mapFile.originalname;
  }
  const map = Map.findByIdAndUpdate(mapId, mapData, { new: true });
  return map;
};
