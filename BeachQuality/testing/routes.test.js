const router = require('../routes/api/beaches');
const mongoose = require("mongoose");

const db = "mongodb+srv://"+
"test-user:"+ //<db-user>:
"test123@"+ //<password>@
"cluster0-v2xke.mongodb.net/test"+ //test db uri
"?retryWrites=true&w=majority"; //options

//connect to the db
mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err));

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    //TODO
  }
})
/*
//COPY-PASTED CODE FOR REFERENCE
const request = require('supertest');
const app = require('../server');
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({
        userId: 1,
        title: 'test is cool',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
});
*/
