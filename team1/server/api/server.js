const express = require('express');
const server = require(express());

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

server.use(bodyParser.json({ limit: '30mb', extended: true }));
server.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
server.use(cors());

module.exports = server;