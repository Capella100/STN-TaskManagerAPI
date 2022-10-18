const tasksDocumention = require('../routes/taskSwagger')

const swaggerDocumenttion = {
    openapi: "3.0.0 ",
    info: {
        title: "Task Manager API",
        verson: "1.0.0",
        description: "A simple Express task manager API"
    },
    servers: [
        {
            url: "http://localhost:5000",
            description: "local dev"
        },
    ],
    tags: [
        {
            name: "tasks",
            description: "tasks routes"
        }
    ],
    paths: {
        ...tasksDocumention,
    }
};



module.exports = swaggerDocumenttion;