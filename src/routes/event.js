const express = require('express');
const eventService = require('../services/event');

const router = express.Router();

router.post('/event', async (req, res) => {
    let eventData = await eventService.create(req.body);
    res.send(eventData);
});

router.get('/event', async (req, res) => {
    let events = await eventService.findAll();
    res.send(events);
});

module.exports = router;