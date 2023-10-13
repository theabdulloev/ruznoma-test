import { MongoClient } from 'mongodb';

// const username = 'abdulloev';
// const password = 'pass3323';
// const host = '127.0.0.1';
// const port = '27017'
// const database = 'test'
// mongodb://${username}:${password}@${host}:${port}/${database}

const url = `mongodb+srv://abdulloev:0CSxryhOnWJEhipW@tojikonbookcl.jsrcsga.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

export default client;
