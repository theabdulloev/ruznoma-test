import { MongoClient } from 'mongodb';
const url = `mongodb+srv://abdulloev:0CSxryhOnWJEhipW@tojikonbookcl.jsrcsga.mongodb.net/?retryWrites=true&w=majority`;
const mongo = new MongoClient(url);

import bodyParser from 'body-parser';
import express from 'express';
const app = express()
app.use(bodyParser.json())
const server = mongo.db('TajGram').collection('users')
app.get('/getUsers', async (req, res) => {
  await mongo.connect();
  const users = await server.find().toArray()
  res.json(users)
})


app.get('/getUsers/:id', async (req, res) => {
  await mongo.connect();
  const username = req.params.id
  console.log(req.params)
  const user = await server.find({ username: username}).limit(1).toArray()
  console.log("user",user)
  res.json(user[0])
})

app.post('/addPost', async (req,res) => {
  await mongo.connect();
  const add = mongo.db('test').collection('users')
  const formData = req.body;
  add.insertOne(formData, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error inserting data into MongoDB');
      return;
    }
    console.log("Addet post")
    res.status(200).send('Data added to MongoDB');
  });
})

export default app;
