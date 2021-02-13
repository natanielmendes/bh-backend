const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const eventRoutes = require('../src/routes/event');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(eventRoutes);

const port = 3000;
app.listen(process.env.PORT || port, () => {
    let usedPort = process.env.PORT === undefined ? port : process.env.PORT;
    console.log('Server listening on ' + usedPort + ' port!');
});

module.exports = app;