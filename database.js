const {MongoClient} = require('mongodb');
require('dotenv').config();
const client = new MongoClient(process.env.URI);


async function dbConnect(){
    const result = await client.connect();
    const db = result.db('admin');
    return db.collection('data')
}

module.exports = dbConnect;