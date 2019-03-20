const mongoose = require('mongoose');
// const connectionString = 'mongodb://localhost/tasks_api';
mongoose.connect('mongodb://localhost/tasks_api', { useNewUrlParser: true });

const AuthorSchema = new mongoose.Schema({
    name: { type: String, min: [3, 'Name must at least has 3 charaters'] }
}, { timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema);