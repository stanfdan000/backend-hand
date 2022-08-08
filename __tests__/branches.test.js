const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');


describe('test routes for branches table', () => {
  beforeEach(() => {
    return setup(pool);
  });



  it.skip('/branches should display a list of service branches', async() => {
    const res = await request(app).get('/branches');
    expect(res.body).toEqual([
      {
        id: '1',
        name: 'THE UNITED STATES ARMY',
        age: '247',
        dob: expect.any(String)
      },
      {
        id: '2',
        name: 'THE UNITED STATES MARINE CORPS',
        age: '246',
        dob: expect.any(String)
      },
      {
        id: '3',
        name: 'THE UNITED STATES NAVY',
        age: '243',
        dob: expect.any(String)
      },
      {
        id: '4',
        name: 'THE UNITED STATES CHAIR FORCE',
        age: '74',
        dob: expect.any(String)
      }

    ]);
  });



  it.skip('/branches/:id should return branches details', async () => {
    const res = await request(app).get('/branches/1');
    expect(res.body).toEqual({
      id: '1',
      name: 'THE UNITED STATES ARMY',
      age: '247',
      dob: expect.any(String)
    });
  });


  it.skip('POST /branches should create a new branches', async () => {
    const newBranch = {
      name: 'THE UNITED STATES SPACE FORCE',
      age: '2',
      dob: 'SEP, 18, 2021',
    };
    const resp = await request(app).post('/branches').send(newBranch);
    
    expect(resp.body.name).toBe('THE UNITED STATES SPACE FORCE');
    expect(resp.body.age).toBe('2');
    expect(resp.body.dob).toBe('SEP, 18, 2021');
    
  });
    





});
