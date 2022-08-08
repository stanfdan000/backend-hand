const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('games routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('/games should show the list of games', async () => {
    const res = await request(app).get('/games');
        
    expect(res.body).toEqual([
      {
        id: '1',
        name: 'Halo',
        type: 'Action',
        year: '2000',

      },
      {
        id: '2',
        name: 'Gears Of War',
        type: 'Action',
        year: '2006',
      },
      {
        id: '3',
        name: 'Hit Man',
        type: 'Action',
        year: '2016',
      },
      {
        id: '4',
        name: 'BorderLands',
        type: 'Action',
        year: '2015',
      },

    ]);
  });






});
