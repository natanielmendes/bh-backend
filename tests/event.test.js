const mongoose = require('mongoose');

const dbHandler = require('./db-handler');
const eventService = require('../src/services/event');
const eventModel = require('../src/models/event');

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await dbHandler.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());

/**
 * Event test suite.
 */
describe('event ', () => {

    /**
     * Tests that a valid event can be created through the eventService without throwing any errors.
     */
    it('can be created correctly', async () => {
        expect(async () => await eventService.create(eventComplete))
            .not
            .toThrow();
    });
});

/**
 * Complete event example.
 */
const eventComplete = {
    firstName: 'Nataniel',
    lastName: 'Mendes',
    email: 'user@mail.pl'
};