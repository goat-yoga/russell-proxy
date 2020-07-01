const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const server = express();
const port = 3000;

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended: true}));
server.use(morgan('dev'));
server.use(cors());

server.listen(port, () => console.log(`App listening at http://localhost:${port}`));

server.use('/', express.static(path.join(__dirname, '../public')));

const reviews = require('../../reviews-module/server/index.js');
