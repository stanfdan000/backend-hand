const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('beer routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('/beer should show the list of beers', async () => {
    const resp = await request(app).get('/beers');
        
    expect(resp.body).toEqual([
      {
        id: '1',
        name: 'star dust',
        type: 'IPA',
        manufactured: '2020',
        calories: '260',
        oz: '16',

      },
      {
        id: '2',
        name: 'black hole',
        type: 'stout',
        manufactured: '2021',
        calories: '245',
        oz: '16',
      },
      {
        id: '3',
        name: 'pine ale',
        type: 'IPA',
        manufactured: '2022',
        calories: '245',
        oz: '16',
      },
      {
        id: '4',
        name: 'the kings mead',
        type: 'IPA',
        manufactured: '1775',
        calories: '245',
        oz: '16',
      },

    ]);
  });


  it.skip('/beers/:id should return beers details', async () => {
    const res = await request(app).get('/beers/1');
    expect(res.body).toEqual({
      id: '1',
      name: 'star dust',
      type: 'IPA',
      manufactured: '2020',
      calories: '260',
      oz: '16',
    });
  });


  it.skip('POST /beers should create a new beer', async () => {
    const newBeer = {
      name: 'lean',
      type: 'purple drank',
      manufactured: '1995',
      calories: '50000',
      oz: '25',
    };
    const resp = await request(app).post('/beers').send(newBeer);
    
    expect(resp.body.name).toBe('lean');
    expect(resp.body.type).toBe('purple drank');
    expect(resp.body.manufactured).toBe('1995');
    expect(resp.body.calories).toBe('50000');
    expect(resp.body.oz).toBe('25');
  });
    


 
});



      






