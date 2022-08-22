const {MongoClient} = require('mongodb');
require('dotenv').config()
// const url = require('mongodb://localhost:27017');
const client = new MongoClient(process.env.URI);
const database = 'admin';

async function getData(){
 const result = await client.connect();
 const db = result.db(database);
 const collection = db.collection('data');
 let response = await collection.find({name:"furqan"}).toArray();
 console.log(response);

}

getData();