// require mongoose
const mongoose = require('mongoose');

// create your schema
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxLength: [20, 'name cannot be more than 20 charaters']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// export schema
module.exports = mongoose.model('Task', TaskSchema);