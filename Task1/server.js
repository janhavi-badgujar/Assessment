const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST, PATCH");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get('/', (req, res) => {
    res.status(200).send({message:"Hello, World!"})
  });

server.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port ${port}.`);
  });