require('newrelic');

const express = require('express');
const winston = require('winston');

const app = express();
const port = 3000;

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
  });
  
logger.info('This is an info message');
logger.error('This is an warning message');


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
    res.send('home World!');
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});