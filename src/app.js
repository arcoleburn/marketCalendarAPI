'use strict';

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const CalService = require('./dbHelpers');
const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

const serializeDate = (date) => ({
  date: date.date,
  open: date.open,
  openTime: date.open_time,
  closeTime: date.closeTime,
});

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/calendar', (req, res, next) => {
  let startDate = req.query.startDate;
  let endDate = req.query.endDate;
  return CalService.getCalendar(req.app.get('db'), startDate, endDate)
    .then((dates) => {
      res.json(dates.map(serializeDate).sort((a,b)=>a.date-b.date));
    })
    .catch(next);
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (process.env.NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.log(error);
    response = { message: error.messager, error };
  }
  res.status(500).json(response);
});
module.exports = app;
