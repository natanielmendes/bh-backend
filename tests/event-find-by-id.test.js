const mongoose = require('mongoose');

const dbHandler = require('./db-handler');
const eventService = require('../src/services/event');
const eventModel = require('../src/models/event');

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => {
    await dbHandler.connect();
});

/**
 * Seed the database.
 */
beforeEach(async () => {
    await createEvents();
});

/**
 * Clear all test data after every test.
 */
afterEach(async () => {
    await dbHandler.clearDatabase();
});

/**
 * Remove and close the db and server.
 */
afterAll(async () => {
    await dbHandler.closeDatabase();
});

/**
 * Event getById test suite.
 */
describe('event getById ', () => {
    /**
     * Should return null if getById doesn't find any event with the provided id.
     */
    it('should return null if nothing is found', async () => {
        await expect(eventService.getById(mongoose.Types.ObjectId()))
            .resolves
            .toBeNull();
    });

    /**
     * Should return the correct event if getById finds the event with the provided id.
     */
    it('should retrieve correct event if id matches', async () => {
        const foundEvent = await eventService.getById(eventNatanielId);
        expect(foundEvent.id).toBe(eventNatanielId);
        expect(foundEvent.email).toBe(eventNataniel.email);
        expect(foundEvent.lastName).toBe(eventNataniel.lastName);
        expect(foundEvent.firstName).toBe(eventNataniel.firstName);
    });
});

/**
 * Seed the database with events.
 */
const createEvents = async () => {
    const createdIphone = await eventModel.create(eventNataniel);
    eventNatanielId = createdIphone.id;
    await eventModel.create(eventBrainhub);
};

let eventNatanielId;

const eventNataniel = {
    firstName: 'Nataniel',
    lastName: 'Mendes',
    email: 'user@mail.pl',
    eventDate: new Date
};

const eventBrainhub = {
    firstName: 'Brain',
    lastName: 'Hub',
    email: 'brain@hub.pl',
    eventDate: new Date
};