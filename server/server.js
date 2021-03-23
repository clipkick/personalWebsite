import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { StaticRouter } from 'react-router-dom/server';
import { json as bodyJson } from 'body-parser';
import mongoose from 'mongoose';
import helmet from 'helmet';
import path from 'path';

import Routes from './routes/index';
import App from '../client/src/app';
import config from './config';

const server = express();

// helmet setup
server.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        // eslint-disable-next-line quotes
        'script-src': ["'self'", "'unsafe-eval'"],
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
server.use(express.static(path.join(__dirname, 'static')));

// static folder where images and thrid party javascript and css are placed
server.set('views', path.join(__dirname, 'views'));

server.use(bodyJson());
//server.use(bodyParser.urlencoded({ extended: false }));

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
server.listen(config.port, config.host, () => {
  console.log('Express listening on port: ', config.port);
});
