const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('beer routes', () => {
    beforeEach(() => {
        return setup(pool);
    });

    it('/beer should show the list of beers', async () => {
        const resp = await request(app).get('/beers');
        expect(resp.body.length).toEqual(2);
        const beer = resp.body.find((beers) => beers.id === '1');
        expect(beers).toHaveProperty('name', 'type', 'pom'); 
    })




})
