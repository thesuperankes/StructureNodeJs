// lib/app.ts
import express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');

//** Routes **/
import { routes as rSite } from './Routes/Site';

// Create a new express application instance

const app: express.Application = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/',rSite);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});