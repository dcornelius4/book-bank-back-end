require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');
const app = require('../../lib/app');

jest.mock('../../lib/middleware/ensure-auth.js');
jest.mock('../../lib/services/auth.js');

const createLibrary = library => {
  return request(app)
    .post('/libraries')
    .send(library)
    .then(res => res.body);
};

describe('library routes', () => {
  beforeAll(() => {
    return connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can post a library', () => {
    return request(app)
      .post('/libraries')
      .send({ placeName: 'The Little Lib', address: '4030 somewhere yada yada', description: 'Some litty books in this spot' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          placeName: 'The Little Lib',
          address: '4030 somewhere yada yada',
          description: 'Some litty books in this spot',
          __v: 0
        });
      });
  });

  it('can get a list of all libraries', async() => {
    const libraries = await Promise.all([
      createLibrary({ placeName: 'The Little Lib', address: '4030 somewhere yada yada', description: 'Some litty books in this spot' })
    ]);

    return request(app)
      .get('/libraries')
      .then(res => {
        expect(res.body).toEqual(libraries);
      });
  });
});
