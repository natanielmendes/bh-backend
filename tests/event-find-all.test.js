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
 * Event findAll test suite.
 */
describe('event findAll ', () => {
    /**
     * Should return null if findAll doesn't find any event with the provided id.
     */
    it('should return null if nothing is found', async () => {
        await expect(eventService.findAll())
            .resolves
            .toHaveLength(0)
    });

    /**
     * Should return the correct event if findAll finds the event with the provided id.
     */
    it('should retrieve events matching all created events', async () => {
        await createEvents();
        const foundEvents = await eventService.findAll();
        expect(foundEvents[0].id).toBe(eventNatanielId);
        expect(foundEvents[0].firstName).toBe(eventNataniel.firstName);
        expect(foundEvents[1].id).toBe(eventBrainhubId);
        expect(foundEvents[1].lastName).toBe(eventBrainhub.lastName);
    });
});

/**
 * Seed the database with events.
 */
let eventNatanielId;
let eventBrainhubId;

const  eventBrainhub = {
    firstName: 'Brain',
    lastName: 'Hub',
    email: 'brain@hub.pl',
    eventDate: new Date
};
const eventNataniel = {
    firstName: 'Nataniel',
    lastName: 'Mendes',
    email: 'user@mail.pl',
    eventDate: new Date
};

const createEvents = async () => {
    const eventNatanielResponse = await eventModel.create(eventNataniel)
    eventNatanielId = eventNatanielResponse.id;
    const eventBrainhubResponse = await eventModel.create(eventBrainhub);
    eventBrainhubId = eventBrainhubResponse.id;
};