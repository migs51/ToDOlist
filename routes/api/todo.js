const express = require('express');
const router = express.Router();

const Todo = require('../../models/Todo');

//@route - POST api/todo
//@desc  - post TODO
router.post('/', async (req, res) => {
  try {
    let todo = new Todo(req.body);

    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route - GET api/todo
//@desc  - get all TODOs
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route - PUT api/todo/:_id
//@desc  - Update TODO
router.put('/:_id', async (req, res) => {
  try {
    let todo = await Todo.findByIdAndUpdate(req.params._id, { new: true });

    return res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route - DELETE api/todo/:_id
//@desc  - Delete TODO

module.exports = router;
