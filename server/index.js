// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const UserModel = require('./models/Users')

// const app = express()
// app.use(cors())
// app.use(express.json())

// mongoose.connect("mongodb://127.0.0.1:27017/crud")

// app.get('/', (req, res) => {
//     UserModel.find({})
//         .then(users => res.json(users))
//         .catch(err => res.json(err))
// })

// app.get('/getUser/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel.findById({ _id: id })
//         .then(user => res.json(user))
//         .catch(err => res.json(err))
// });

// app.put('/Updateuser/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel.findByIdAndUpdate({ _id: id }, {
//         name: req.body.name,
//         email: req.body.email,
//         age: req.body.age
//     })
//         .then(user => res.json(user))
//         .catch(err => res.json(err))
// })

// app.delete('/deleteUser/:id', (req,res) =>{
//         const id = req.params.id;
//         UserModel.findByIdAndDelete({_id:id})
//         .then(res => res.json(res))
//         .catch(err => res.json(err))
// })

// app.post("/Createuser", (req, res) => {
//     UserModel.create(req.body)
//         .then(users => res.json(users))
//         .catch(err => res.json(err))
// })

// app.listen(3001, () => {
//     console.log("server is now finally running")
// })

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./models/Todos');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

// Get all todos
app.get('/', (req, res) => {
    TodoModel.find({})
        .then(todos => res.json(todos))
        .catch(err => res.json(err));
});

// Get single todo by ID
app.get('/getTodo/:id', (req, res) => {
    const id = req.params.id;
    TodoModel.findById({ _id: id })
        .then(todo => res.json(todo))
        .catch(err => res.json(err));
});

// Update a todo
app.put('/updateTodo/:id', (req, res) => {
    const id = req.params.id;
    TodoModel.findByIdAndUpdate({ _id: id }, {
        task: req.body.task,
        priority: req.body.priority,
        dueDate: req.body.dueDate
    })
        .then(todo => res.json(todo))
        .catch(err => res.json(err));
});

// Delete a todo
app.delete('/deleteTodo/:id', (req, res) => {
    const id = req.params.id;
    TodoModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

// Create a new todo
app.post("/createTodo", (req, res) => {
    TodoModel.create(req.body)
        .then(todo => res.json(todo))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("server is now finally NOW running");
});
