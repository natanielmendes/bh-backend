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
        const successfulEvent = {
            firstName: 'Nataniel',
            lastName: 'Mendes',
            email: 'user@mail.pl',
            eventDate: new Date
        };
        expect(async () => await eventService.create(successfulEvent))
            .not
            .toThrow();
    });

    /**
     * Event should exist after being created.
     */
    it('event exists after being created', async () => {
        const successfulEvent = {
            firstName: 'Nataniel',
            lastName: 'Mendes',
            email: 'user@mail.pl',
            eventDate: new Date
        };
        
        const createdEventDetails = await eventService.create(successfulEvent);

        const createdEvent = await eventModel.findById(createdEventDetails._id);

        expect(createdEvent.name)
            .toBe(successfulEvent.name);
    });

    /**
     * Tests that a missing firstName event CANNOT be created through the eventService without throwing any errors.
     */
    it('throw error when firstName is missing', async () => {
        const missingFirstNameEvent = {
            lastName: 'Mendes',
            email: 'user@mail.pl',
            eventDate: new Date
        };
        expect(async () => await eventService.create(missingFirstNameEvent))
            .rejects
            .toThrow(mongoose.Error.ValidationError)
    });

    /**
     * Tests that a missing lastName event CANNOT be created through the eventService without throwing any errors.
     */
    it('throw error when lastName is missing', async () => {
        const missingLastNameEvent = {
            firstName: 'Nataniel',
            email: 'user@mail.pl',
            eventDate: new Date
        };
        expect(async () => await eventService.create(missingLastNameEvent))
            .rejects
            .toThrow(mongoose.Error.ValidationError)
    });

    /**
     * Tests that a missing email event CANNOT be created through the eventService without throwing any errors.
     */
    it('throw error when email is missing', async () => {
        const missingEmailEvent = {
            firstName: 'Nataniel',
            lastName: 'Mendes',
            eventDate: new Date
        };
        expect(async () => await eventService.create(missingEmailEvent))
            .rejects
            .toThrow(mongoose.Error.ValidationError)
    });

    /**
     * Tests that a missing eventDate event CANNOT be created through the eventService without throwing any errors.
     */
    it('throw error when event date is missing', async () => {
        const missingEmailEvent = {
            firstName: 'Nataniel',
            email: 'user@mail.pl',
            lastName: 'Mendes'
        };
        expect(async () => await eventService.create(missingEmailEvent))
            .rejects
            .toThrow(mongoose.Error.ValidationError)
    });

});