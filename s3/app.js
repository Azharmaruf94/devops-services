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

  //////////////////////////////////////
  const express = require("express");
const axios = require("axios");

const app = express();

app.get("/sum", async (req, res) => {
  const { a, b } = req.query;
  const response = await axios.get(`http://service1:3001/sum?a=${a}&b=${b}`);
  res.json(response.data);
});

app.get("/difference", async (req, res) => {
  const { a, b } = req.query;
  const response = await axios.get(`http://service2:3002/difference?a=${a}&b=${b}`);
  res.json(response.data);
});

app.listen(3003, () => {
  console.log("Service 3 listening on port 3003");
});

  //////////////////////////////////////

});

/** 404 error */
app.all("*", (req, res, next) => {
  const err = new HttpException(404, "Endpoint Not Found");
  return res.status(err.status).send(err.message);
});

app.listen(port, () => {
  console.log("Start", fileName, `S3 App listening at http://localhost:${port}`);
});
