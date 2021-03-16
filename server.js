import express from 'express';
import sass from 'node-sass-middleware';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { StaticRouter } from 'react-router-dom/server';
import { json as bodyJson } from 'body-parser';
import Routes from './routes/index';

import App from './src/app';
import config from './config';

const server = express();

// uses sass style sheets
server.use(
  sass({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'static/css'),
    debug: false,
    outputStyle: 'compressed',
    prefix: '/css',
  })
);
console.log(path.join(__dirname, 'sass'), path.join(__dirname, 'static/css'));
// uses ejs for html accross all components
server.set('view engine', 'ejs');

// static folder where images and thrid party javascript and css are placed
server.use(express.static('static'));

server.use(bodyJson());
//server.use(bodyParser.urlencoded({ extended: false }));

server.use(Routes);

server.get('/api*', (req, res) => {
  res.render('chat');
});

/* sends to the ejs template for basic html and bundle.js
react then renders and using react-helmet changes the css for each section */
server.get('/*', (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();
  // content, title: helmet.title.toString(), css: helmet.link.toString()
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
