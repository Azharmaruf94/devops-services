//provides stronger error checking and more secure code
"use strict";

// web server framework for Node.js applications
const express = require("express");
// allows requests from web pages hosted on other domains
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const fileName = "app.js";

const { HttpException } = require("./HttpException.utils");

const app = express();
const port = 8083;

// Parses incoming JSON requests
app.use(express.json());
app.use(cors());

/** add reqId to api call */
app.use(function (req, res, next) {
  res.locals.reqId = uuidv4();
  next();
});

app.post("/add-sub", (req, res) => {
  const {a=0, b=0} = req.body;
  console.log(`A: ${a}, B: ${b}`);

  const express = require('express');
const axios = require('axios');
const app = express();
const port = 3003;

app.get('/calculate', async (req, res) => {
  const a = 10; // Replace with your logic to get 'a' from the request.
  const b = 5;  // Replace with your logic to get 'b' from the request.

  try {
    const sumResponse = await axios.get('http://s1:3001/sum', { params: { a, b } });
    const diffResponse = await axios.get('http://s2:3002/difference', { params: { a, b } });

    res.json({ sum: sumResponse.data, difference: diffResponse.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`S3 service is listening at http://localhost:${port}`);
});


});

/** 404 error */
app.all("*", (req, res, next) => {
  const err = new HttpException(404, "Endpoint Not Found");
  return res.status(err.status).send(err.message);
});

app.listen(port, () => {
  console.log("Start", fileName, `S3 App listening at http://localhost:${port}`);
});
