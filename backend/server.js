const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const excerciseRouter = require('./routes/excercises');
const usersRouter = require('./routes/users');

app.use('/excercises', excerciseRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log('Server is running on port: 3000');
});