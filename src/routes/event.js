const express = require('express');
const eventService = require('../services/event');

const router = express.Router();

router.post('/event', async (req, res) => {
    try {
        let eventData = await eventService.create(req.body);
        res.send(eventData);
    } catch(error) {
        return res.status(400).send(error);
    };
});

router.get('/event', async (req, res) => {
    let events = await eventService.findAll();
    res.send(events);
});

module.exports = router;