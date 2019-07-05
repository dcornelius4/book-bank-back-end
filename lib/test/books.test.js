require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');
const app = require('../../lib/app');

jest.mock('../../lib/middleware/ensure-auth.js');
jest.mock('../../lib/services/auth.js');

const createBook = book => {
  return request(app)
    .post('/books')
    .send(book)
    .then(res => res.body);
};

describe('book routes', () => {
  beforeAll(() => {
    return connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can post a book', () => {
    return request(app)
      .post('/books')
      .send({ bookName: 'Harry Potter' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          bookName: 'Harry Potter',
          __v: 0
        });
      });
  });

  it('can get a list of all books', async() => {
    const books = await Promise.all([
      createBook({ bookName: 'Harry Potter' })
    ]);

    return request(app)
      .get('/books')
      .then(res => {
        expect(res.body).toEqual(books);
      });
  });
});
