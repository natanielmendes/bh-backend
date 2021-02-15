const mongoose = require('mongoose');

/**
 * Event schema.
 */
const eventSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    eventDate: { type: Date, required: false }
});

module.exports = mongoose.model('event', eventSchema);