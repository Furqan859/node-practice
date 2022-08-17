const {MongoClient} = require('mongodb');
const express = require('express');
const app = express();
require('dotenv').config()

const database = 'admin';
const client = new MongoClient(process.env.URI)

async function getData() {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('data');
    let response = await collection.find({}).toArray();
    console.log(response)

}

getData();
app.listen(process.env.PORT)


