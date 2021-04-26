import mongoose from 'mongoose';
import fs from 'fs/promises';
import { characterModel } from '../models/pdfCharacterModel';

const pathfinderConnection = mongoose.connection.useDb('pathfinder');
const Character = pathfinderConnection.model('Character', characterModel);

export const getAllCharacters = async (campaignId, characterKnown) => {
  let character;
  if (characterKnown) {
    character = await Character.find(
      { campaignId, characterKnown: true },
      { _id: 1, name: 1, affiliationsKnown: 1, characterImage: 1 }
    ).sort({ name: 1 });
  } else {
    character = await Character.find(
      { campaignId },
      { _id: 1, name: 1, affiliations: 1, characterImage: 1 }
    ).sort({ name: 1 });
  }
  return character;
};

export const getCharacterById = async (id) => {
  let character = await Character.findById(id);
  return character;
};

export const addCharacter = async (characterFile, imageFile, characterData) => {
  const character = new Character(characterData);

  if (characterFile) {
    const newFile = await fs.readFile(characterFile.destination + characterFile.filename);

    let path = 'static/img/pathfinder/' + character.campaignId + '/'; //+ mapFile.originalname;
    await fs.mkdir(path, { recursive: true });
    await fs.writeFile(path + characterFile.originalname, newFile);

    character.characterFilename = characterFile.originalname;
  }

  if (imageFile) {
    const newFile = await fs.readFile(imageFile.destination + imageFile.filename);

    let path = 'static/img/pathfinder/' + character.campaignId + '/'; //+ mapFile.originalname;
    await fs.mkdir(path, { recursive: true });
    await fs.writeFile(path + imageFile.originalname, newFile);

    character.characterImage = imageFile.originalname;
  }

  await character.save();
  return character;
};

export const updateCharacter = async (characterId, characterFile, imageFile, characterData) => {
  if (characterFile) {
    const newFile = await fs.readFile(characterFile.destination + characterFile.filename);

    let path = 'static/img/pathfinder/' + characterData.campaignId + '/'; //+ mapFile.originalname;
    await fs.mkdir(path, { recursive: true });
    await fs.writeFile(path + characterFile.originalname, newFile);

    characterData.characterFilename = characterFile.originalname;
  }

  if (imageFile) {
    const newFile = await fs.readFile(imageFile.destination + imageFile.filename);

    let path = 'static/img/pathfinder/' + characterData.campaignId + '/'; //+ mapFile.originalname;
    await fs.mkdir(path, { recursive: true });
    await fs.writeFile(path + imageFile.originalname, newFile);

    characterData.characterImage = imageFile.originalname;
  }

  const character = await Character.findByIdAndUpdate(characterId, CharacterData, { new: true });
  return character;
};
