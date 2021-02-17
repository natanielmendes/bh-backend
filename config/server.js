const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoMemoryServerConfig = {
    instance: {
        dbName: "events-dev"
    }
}
const mongod = new MongoMemoryServer(mongoMemoryServerConfig).getUri().then((uri) => {
    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    
    mongoose.connect(uri, mongooseOpts);
});

const eventRoutes = require('../src/routes/event');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(eventRoutes);

const port = 3001;
app.listen(process.env.PORT || port, () => {
    let usedPort = process.env.PORT === undefined ? port : process.env.PORT;
    console.log('Server listening on ' + usedPort + ' port!');
});

module.exports = app;