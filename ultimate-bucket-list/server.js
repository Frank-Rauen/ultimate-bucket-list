const express = require('express');
const logger = require('morgan');
const serveFavicon = require('serve-favicon');
const path = require('path');

const app = express();

require('dotenv').config();
require('/config/database');
