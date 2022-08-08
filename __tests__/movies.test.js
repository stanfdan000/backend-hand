const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('movie routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('/movies should show the list of movies', async () => {
    const res = await request(app).get('/movies');
        
    expect(res.body).toEqual([
      {
        id: '1',
        name: 'war of the worlds',
        type: 'sci-fi',
        year: '2005',

      },
      {
        id: '2',
        name: 'oblivion',
        type: 'Action',
        year: '2013',
      },
      {
        id: '3',
        name: 'elysium',
        type: 'Action',
        year: '2013',
      },
      {
        id: '4',
        name: 'chappie',
        type: 'crime',
        year: '2015',
      },

    ]);
  });






});
