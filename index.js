// import express and make and instance of it.
const express = require('express');
const connectDB = require('./db/connect')
const { connect, connection } = require('mongoose');
const app = express();

// CREATING UR SERVER
const PORT = process.env.PORT || 5000;

const connectionString = 'mongodb+srv://Capella:Amarachi0011@cluster0.kqtmk2k.mongodb.net/?retryWrites=true&w=majority'

// CONNECTING TO THE DATA BASE AND LISTTEN TO SERVER
const start = async () => {
    try {
        await connectDB(connectionString)
        app.listen(PORT, () => {
            console.log(`server is listening on PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error);

    }
}

start();
