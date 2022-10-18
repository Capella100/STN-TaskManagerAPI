// import express and make and instance of it.
const express = require('express');
require('dotenv').config()
const connectDB = require('./db/connect');
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
const tasks = require('./routes/task')
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerDocumenttion = require('./swagger/documentations')


// const { connect, connection } = require('mongoose');
const app = express();

// CREATING UR SERVEr
const PORT = process.env.PORT || 5000;



//middleware for passing json.
app.use(express.json())

app.use('/documentations', swaggerUI.serve);
app.use('/documentations', swaggerUI.setup(swaggerDocumenttion));


// routes
app.use('/api/v1/tasks', tasks)

app.use(errorHandlerMiddleware);
app.use(notFound)

// CONNECTING TO THE DATA BASE AND LISTTEN TO SERVER
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        // THEN YOU LISTEN TO PORT.
        app.listen(PORT, () => {
            console.log(`server is listening on PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error);

    }
}

start();
