const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

const routes = require("./routes");

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'PUT'
    ],
  
    allowedHeaders: [
      'Content-Type',
      'authorization'
    ],
  };
  
  app.use(cors(corsOpts));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.listen(process.env.PORT, () => console.log(`ouvindo porta ${process.env.PORT}!`));