const app = require('../routes/api/user.js');
const request = require('supertest');
const Users = require('../models/user');

const mongoose = require('mongoose');
const db = "mongodb+srv://"+
"test-user:"+ //<db-user>:
"test123@"+ //<password>@
"cluster0-v2xke.mongodb.net/test"+
"?retryWrites=true&w=majority"

let connection;

describe('Testing db', () => {
    beforeAll(async () => {
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



    app.post('/register', async (req,resul) => {
        const {email,password}= req.body
        const user = new Users({email,password})
        const ret = await user.save()
        resul.json(ret)
    })

     // it('Save user in the database', done =>{
     //    const res=  request(app).post('/users')
     //         .send({
     //             email: 'testing123@gmail.com',
     //             password: 'pass123'
     //         });
     //    const testUser = new Users ({email: 'testing123@gmail.com', password: 'pass123'});
     //      expect(res).toEqual(testUser)
     //     done()
     //
     // });

    it("Gets all users, returns 1", async() => {
        mockUser = {email: "fulano@gmail.com", password: "Lolazo21"};
        let body;
        request(app).post("/users")
            .send(mockUser)
            .then((res) => {
                request(app).get('/users')
                    .then((res) => {
                            body = res.body;
                        expect(body.length).toEqual(-1);
                        done();
                    })
            })
            .catch((err) => done(err));
    });

    it("Get all users", async() => {
    request(app).get('/users')
        .then((res) => {
            const body = res.body;
            expect(body.length).toEqual(0);
            done();
        })
            .catch((err) => done(err));
    });

    // it("update one user", async() =>{
    //     request(app).put('/users')
    //         .send({email: 'fulano@gmail.com', password: 'newPass'})
    //     const getUsers = Users.Find().sort({name: 1})
    //     const user = request(app).get({email: 'fulano@gmail.com'})
    //     //const pass = Users.findOne({password: 'newPass'})
    //     //console.log(user)
    //     expect(getUsers).toBe(user)
    //
    // })

})
