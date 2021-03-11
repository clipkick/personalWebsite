import express from 'express';
import sass from 'node-sass-middleware';
import path from 'path';

import config from './config';

const server = express();

// uses sass style sheets
server.use(
  sass({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'static/css'),
  })
);

// uses ejs for html accross all components
server.set('view engine', 'ejs');

// static folder where images and thrid party javascript and css are placed
server.use(express.static('static'));

/* 
sends to the ejs template for basic html and bundle.js
react then renders and using react-helmet changes the css for each section
*/
server.get('/*', (req, res) => {
  res.render('index', {});
});

/* starts server with arguments in a config file, not included as has certian logins
   included is a config.dummy.js file that does not contain sensitive data*/
server.listen(config.port, config.host, () => {
  console.log('Express listening on port: ', config.port);
});
