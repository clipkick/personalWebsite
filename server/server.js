/* eslint-disable quotes */
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { StaticRouter } from 'react-router-dom/server';
import bodyParser, { json as bodyJson } from 'body-parser';
import mongoose from 'mongoose';
import helmet from 'helmet';
import https from 'https';
import fs from 'fs';

import Routes from './routes/index';
import App from '../client/src/app';
import config from './config';

const server = express();

// helmet setup
server.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'default-src': ["'self'"],
        'base-uri': ["'self'"],
        'block-all-mixed-content': [],
        'font-src': ["'self'", 'https:', 'data:'],
        'frame-ancestors': ["'self'"],
        'img-src': ["'self'", 'data:', 'https://sp.tinymce.com'],
        'object-src': ["'none'"],
        'script-src': ["'self'", "'unsafe-eval'", 'https://cdn.tiny.cloud'],
        'script-src-attr': ["'none'"],
        'style-src': ["'self'", 'https:', "'unsafe-inline'"],
      },
    },
  })
);

//mongoose connection
const mongodbConnection = async () => {
  try {
    await mongoose.connect(config.mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      user: config.mongodbUser,
      pass: config.mongodbPass,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Failed to connect to MongoDB', error);
  }
};
mongodbConnection();

// uses ejs for html accross all components
server.set('view engine', 'ejs');

// static folder where images and thrid party javascript and css are placed
server.use(express.static('static'));

//forces website to https in case http is called for
server.use((req, res, next) => {
  if (config.ENV != 'development' && !req.secure) {
    return res.redirect('https://' + req.headers.host + req.url);
  }

  next();
});

server.use((req, res, next) => {
  let logData = `date: ${new Date().toLocaleString()}, page: ${req.url}, IP: ${req.ip}`;
  console.log(logData);
  const log = fs.createWriteStream('log.txt', { flags: 'a' });
  log.write(logData + '\n');
  log.end();
  next();
});

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyJson());

server.use(Routes);

// could render a node js error as this would be a 404 to the api
// server.get('/api*', (req, res) => {});

/* sends to the ejs template for basic html and bundle.js
react then renders and using react-helmet changes the css for each section */
server.get('/*', (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  res.render('index', {
    content,
    title: helmet.title.toString(),
    link: helmet.link.toString(),
    meta: helmet.meta.toString(),
  });
});

/* starts server with arguments in a config file, not included as has certian logins
   included is a config.dummy.js file that does not contain sensitive data */
// server.listen(config.port, config.host, () => {
//   console.log('Express listening on port: ', config.port);
// });
https
  .createServer(
    {
      key: fs.readFileSync('c:/Certbot/live/sanderson.zapto.org/privkey.pem'),
      cert: fs.readFileSync('c:/Certbot/live/sanderson.zapto.org/fullchain.pem'),
    },
    server
  )
  .listen(config.sslPort, () => {
    console.log('Express ssl listening on port: ', config.sslPort);
  });

server.listen(config.port, config.host, () => {
  console.log('Express listening on port: ', config.port);
});
