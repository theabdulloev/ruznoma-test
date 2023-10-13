const MongoClient = require('mongodb').MongoClient;

// const username = 'abdulloev';
// const password = 'pass3323';
// const host = '127.0.0.1';
// const port = '27017'
// const database = 'test'
// mongodb://${username}:${password}@${host}:${port}/${database}

const url = `mongodb://atlas-sql-6413ec557c2f2252f0423066-lga8u.a.query.mongodb.net/TajGram?ssl=true&authSource=admin`;
const client = new MongoClient(url);

export default client;
