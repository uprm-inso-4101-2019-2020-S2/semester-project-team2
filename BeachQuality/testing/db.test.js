const app = require('../routes/api/user.js');
const request = require('supertest');

const mongoose = require('mongoose');
const db = "mongodb+srv://"+
"test-user:"+ //<db-user>:
"test123@"+ //<password>@
"cluster0-v2xke.mongodb.net/test"+
"?retryWrites=true&w=majority"

let connection;

describe('Testing db', () => {

    beforeAll(async () => {
        //db = require("../services/config/mongo").mongoURI;
        connection = await mongoose.connect(db, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true,
                })
                .then(() => console.log("connected to database"))
                .catch((err) => console.log(err));
    });

    afterAll(async () => {
        await connection.close();
        await db.close();
    });

it("Get all users", async() => {
  request(app).get('/')
  //.find()
  .then((res) => {
        const body = res.body;
        expect(body.length).to.equal(0);
        done();
      })
  .catch((err) => done(err));
});

}) 
