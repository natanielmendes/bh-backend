const mongoose = require('mongoose');

/**
 * Event schema.
 */
const eventSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    eventDate: { type: String, required: false }
});

module.exports = mongoose.model('event', eventSchema);