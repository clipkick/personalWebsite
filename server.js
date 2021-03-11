import express from 'express';
import sass from 'node-sass-middleware';
import path from 'path';

import config from './config';

const server = express();

server.use(
  sass({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'static'),
  })
);

server.set('view engine', 'ejs');

server.get(['/', '/haha'], (req, res) => {
  res.render('index', {});
});
server.get('/pathfinder', (req, res) => {
  res.render('pathfinder', {});
});

server.use(express.static('static'));

server.listen(config.port, config.host, () => {
  console.log('Express listening on port: ', config.port);
});
