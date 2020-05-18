import * as users from "mongoose";

//const {MongoClient} = require('mongodb');
const mongoose = require("mongoose");

describe('insert', () => {
    let connection;
    let db;

    beforeAll(async () => {
        db = require("../services/config/mongo").mongoURI;
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

    it('should insert a doc into collection', async () => {
        const users = db.collection('users');
        const beaches = db.collection('beaches');


        const mockUser = {email: 'john@john.com', password: 'jhonsito123', favoriteList: ['Buye','Playa Sucia']};
        await users.insertOne(mockUser);

        const mockBeaches = {name: 'Buye', image: 'buyesito', location: 'cabo rojo', quality: 'medium'};
        await beaches.insertOne(mockBeaches);

        const insertedUser = await users.findOne({email: 'john@john.com'});
        const insertedBeaches = await beaches.findOne({name: 'Buye'});
        expect(insertedUser).toEqual(mockUser);
        expect(insertedBeaches).toEqual(mockBeaches);
    });

    it("inserting something to a collection without the requiered fields should fail", async () =>{
        const userFails = db.collection('users');
        const beachesFails = db.collection('beaches');

        const mockUserFail = {email:'jhon@fail.com'};
        await userFails.insertOne(mockUserFail);

        const mockBeachFails = {name: 'failed Beach'};
        await beachesFails.insertOne(mockBeachFails);

        const failInsertUser = await userFails.findOne({email: 'john@john.com'});
        const failInsertBeaches = await beachesFails.findOne({name: "failed Beach"});

        expect(failInsertUser).not.toEqual(mockUserFail); //expecting an error?
        expect(failInsertBeaches).not.toEqual(mockBeachFails); //TODO: make sure this code is written correctly

    });

    it('GET: all users/beaches ', async () => {
        const GetUser = db.collection('users');
        const GetBeach = db.collections('beaches');

        const getUsers =  await GetUser.getAll();

        const getBeaches = await GetBeach.getAll();

        expect(GetUser).toEqual(getUsers);
        expect(GetBeach).toEqual(getBeaches);

    });

    // it('returns empty when not found', async () =>{
    //    const notFoundUsers = db.collection('users');
    //    const notFoundBeaches = db.collections('beaches');
    //
    //    const notFoundU= {email: "pepito@delbarrio.com" };
    //    await notFoundUsers.findById()
    //
    // });
    //

});



