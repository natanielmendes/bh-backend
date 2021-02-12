const port = 3000;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(process.env.PORT || port, () => {
    let usedPort = process.env.PORT === undefined ? port : process.env.PORT;
    console.log('Server listening on ' + usedPort + ' port!');
});

module.exports = server;