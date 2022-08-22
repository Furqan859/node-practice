const {MongoClient} = require('mongodb');
require('dotenv').config();
const client  = new MongoClient(process.env.URI);
const database = 'admin';


async function dbConnect(){
    const result =await client.connect();
    const db = result.db(database);
    return db.collection('data');
   
}

module.exports = dbConnect;










// const {MongoClient} = require('mongodb');
// require('dotenv').config()
// const client = new MongoClient(process.env.URI);
// const database = 'admin';

// async function dbConnect(){
//  const result = await client.connect();
//  const db = result.db(database);
//  return db.collection('data');
// }

// module.exports = dbConnect;