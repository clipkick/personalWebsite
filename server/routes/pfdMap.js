import express from 'express';
import multer from 'multer';
import { getAllMaps, getMapById, addMap, updateMap } from '../api/pfdMaps';

const app = (module.exports = express());

const upload = multer({ dest: 'uploads/' });

app
  .route('/api/:campaignId/map')
  .get(async (req, res) => {
    try {
      const mapData = await getAllMaps(req.params.campaignId);
      res.statusCode = 200;
      res.send(mapData);
    } catch (error) {
      res.statusCode = 500;
      console.log(error);
      res.send(error);
    }
  })
  .post(upload.single('map'), async (req, res) => {
    const body = req.body;
    try {
      const mapData = await addMap(req.file, body);
      res.statusCode = 201;
      res.send(mapData);
    } catch (error) {
      res.statusCode = 500;
      console.log(error);
      res.send(error);
    }
  });

app
  .route('/api/:campaignId/map/:id')
  .get(async (req, res) => {
    try {
      const mapData = await getMapById(req.params.id);
      if (mapData.campaignId != req.params.campaignId)
        throw new Error('requested map not in current campaign');
      res.statusCode = 200;
      res.send(mapData);
    } catch (error) {
      res.statusCode = 500;
      console.log(error);
      res.send(error);
    }
  })
  .put(upload.single('map'), async (req, res) => {
    try {
      const mapData = await updateMap(req.params.id, req.body, req.file);
      res.statusCode = 200;
      res.send(mapData);
    } catch (error) {
      res.statusCode = 500;
      console.log(error);
      res.send(error);
    }
  });

// app.route('/api/maps2').post((req, res) => {
//   console.log(req.body.filename);
//   res.send(req.body);
// });
