const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  toDo: {
    type: String,
  },
});

module.exports = Todo = mongoose.model('todo', TodoSchema);
