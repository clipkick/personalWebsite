import express from 'express';
import multer from 'multer';
import {
  getAllCharacters,
  getCharacterById,
  addCharacter,
  updateCharacter,
} from '../api/pdfCharacter';

const app = (module.exports = express());

const upload = multer({ dest: 'uploads/' });

app
  .route('/api/:campaignId/character/:id')
  .get(async (req, res) => {
    try {
      const characterData = await getCharacterById(req.params.id);
      if (CharacterData.campaignId != req.params.campaignId)
        throw new Error('Requested character not in selected campaign');
      res.statusCode = 200;
      res.send(characterData);
    } catch (error) {
      res.statusCode = 500;
      console.log(error);
      res.send(error);
    }
  })
  .put(upload.single('map'), async (req, res) => {
    try {
      const characterData = await updateCharacter(req.params.id, req.body, req.file);
      res.statusCode = 200;
      res.send(characterData);
    } catch (error) {
      res.statusCode = 500;
      console.log(error);
      res.send(error);
    }
  });

app
  .route('/api/:campaignId/character')
  .get(async (req, res) => {
    try {
      const characterData = await getAllCharacters(req.params.campaignId);
      res.statusCode = 200;
      res.send(characterData);
    } catch (error) {
      res.statusCode = 500;
      console.log(error);
      res.send(error);
    }
  })
  .post(
    upload.fields([
      { name: 'characterImage', maxCount: 1 },
      { name: 'characterFilename', maxCount: 1 },
    ]),
    async (req, res) => {
      const body = req.body;
      console.log(req.files);
      const characterImage = req.files.characterImage ? req.files.characterImage[0] : undefined;
      const characterFilename = req.files.characterFilename
        ? req.files.characterFilename[0]
        : undefined;
      try {
        const characterData = await addCharacter(characterImage, characterFilename, body);
        res.statusCode = 201;
        res.send(characterData);
      } catch (error) {
        res.statusCode = 500;
        console.log(error);
        res.send(error);
      }
    }
  );
