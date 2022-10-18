const tasks = [
    {
        "_id": "taskId",
        "name": "Watch Match",
        "completed": false,
    }
]

const getAllTasks = {
    tags: ["tasks"],
    description: "list all they Tasks",
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        type: "Object",
                        example: tasks[0]

                    },
                },
            },
        },
    },
};
const createTasks = {
    tags: ["tasks"],
    description: "create a task",
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        name: {
                            type: "string",
                            description: " Name of tasks ",
                            example: "play game"
                        },
                        completed: {
                            type: "Boolean",
                            description: "if the task is done",
                            example: false
                        }
                    }
                }
            }
        }
    },
    responses: {
        201: {
            description: "created",
            content: {
                "application/json": {
                    schema: {
                        type: "Object",
                        example: tasks[0]
                    },
                },
            },
        },
    },
};
const getTask = {
    tags: ["tasks"],
    summary: "get a task by Id",
    description: "get Task by id",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of the user",
            type: "ObjectID",
            example: "634d1410a66741dbb4b45a12",
        },
    ],
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        type: "string",
                        example: tasks[0]
                    },
                },
            },
        },
        404: {
            description: "BAD REQUEST",
        },
    },
}

const updateTask = {
    tags: ["tasks"],
    summary: "update a task",
    description: "update Task",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of the user",
            type: "ObjectID",
            example: "634d1410a66741dbb4b45a12",
        },
    ],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        name: {
                            type: "string",
                            description: " Name of tasks ",
                            example: "play game"
                        },
                        completed: {
                            type: "Boolean",
                            description: "if the task is done",
                            example: false
                        }
                    }
                }
            }
        }
    },
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        type: "string",
                        example: tasks[0]
                    },
                },
            },
        },
        404: {
            description: "BAD REQUEST",
        },
    },
}

const deleteTask = {
    tags: ["tasks"],
    summary: "delete a task ",
    description: "delete a task",
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of the user",
            type: "ObjectID",
            example: "634d1410a66741dbb4b45a12",
        },
    ],
    responses: {
        200: {
            description: "OK, task has been deleted",
        },
        404: {
            description: "BAD REQUEST",
        },
    },
}

const tasksDocumention = {
    "/api/v1/tasks": {
        get: getAllTasks,
        post: createTasks,
    },
    "/api/v1/tasks/{id}": {
        get: getTask,
        put: updateTask,
        delete: deleteTask,
    }
};


module.exports = tasksDocumention;