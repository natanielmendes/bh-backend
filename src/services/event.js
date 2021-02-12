const eventModel = require('../models/event');

/**
 * Stores a new event into the database.
 * @param {Object} event event object to create.
 * @throws {Error} If the event object is not provided.
 */
module.exports.create = async (event) => {
    if (!event)
        throw new Error('Missing event data');

    await eventModel.create(event);
}