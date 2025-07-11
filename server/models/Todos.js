// const mongoose = require('mongoose')

// const UserSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number
// })

// const UserModel = mongoose.model("users", UserSchema)
// module.exports=UserModel

const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium'
  },
  dueDate: {
    type: String, // or Date if you prefer
  },
});

module.exports = mongoose.model('todos', TodoSchema);
