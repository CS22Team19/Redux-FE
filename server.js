const express = require("express");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

const port = 5000;
server.listen(port, err => {
  if (err) console.log(err);
  console.log(`***The server is running on port ${port}`);
});
