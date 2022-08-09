const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('cars routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('/cars should show the list of cars', async () => {
    const resp = await request(app).get('/cars');
        
    expect(resp.body).toEqual([
      {
        id: '1',
        name: 'thunder bird',
        type: 'ford',
        manufactured: '1957',

      },
      {
        id: '2',
        name: 'coronet',
        type: 'dodge',
        manufactured: '1968',
      },
      {
        id: '3',
        name: 'cj-7',
        type: 'jeep',
        manufactured: '1985',
      },
      {
        id: '4',
        name: 'gto',
        type: 'pontiac',
        manufactured: '1965',
      },

    ]);
  });

  it.skip('/cars/:id should return cars details', async () => {
    const res = await request(app).get('/cars/1');
    expect(res.body).toEqual({
      id: '1',
      name: 'thunder bird',
      type: 'ford',
      manufactured: '1957',
    });
  });




  it.skip('POST /cars should create a new car', async () => {
    const newCars = {
      name: 'noah ark',
      type: 'cargo',
      manufactured: 'SEP, 18, 305BC',
    };
    const resp = await request(app).post('/cars').send(newCars);
    console.log(resp.body);
    expect(resp.body.name).toBe('noah ark');
    expect(resp.body.type).toBe('cargo');
    expect(resp.body.manufactured).toBe('SEP, 18, 305BC');
  });
    





});
