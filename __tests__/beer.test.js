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
        
    expect(resp.body).toEqual([
      {
        id: '1',
        name: 'star dust',
        type: 'IPA',
        manufactured: '2020',

      },
      {
        id: '2',
        name: 'black hole',
        type: 'stout',
        manufactured: '2021',
      },
      {
        id: '3',
        name: 'pine ale',
        type: 'IPA',
        manufactured: '2022',
      },
      {
        id: '4',
        name: 'the kings mead',
        type: 'IPA',
        manufactured: '1775',
      },

    ]);
  });






});
