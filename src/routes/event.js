const express = require('express');

const router = express.Router();

router.get('/event', (req, res) => {
    return res.send('<h1>Getting events response</h1>');
});

module.exports = router;