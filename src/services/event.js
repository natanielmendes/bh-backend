const eventModel = require('../models/event');

/**
 * Stores a new event into the database.
 * @param {Object} event event object to create.
 * @throws {Error} If the event object is not provided.
 */
create = async (event) => {
    if (!event)
        throw new Error('Missing event data');

    let result = await eventModel.create(event).catch((error) => {
        throw error;
    })
    
    return result;
}

/**
 * Retrieves all events.
*/
findAll = async () => {
    const event = await eventModel.find({}, (err, events) => {
        console.log(events)
        if(err) {
            console.log(err)
        }
        return events;
    });
    return event;
};

/**
 * Retrieves an event by id.
 * @param {String} id Event unique identifier
*/
getById = async (id) => {
    const event = await eventModel.findById(id);
    return event;
};

module.exports = {
    create,
    findAll,
    getById
}