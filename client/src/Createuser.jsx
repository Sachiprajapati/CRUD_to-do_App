// import React from "react";
// import "./Createusers.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from 'axios'

// const Createuser = () => {
//   const [name, setName] = useState()
//   const [email, setEmail] = useState()
//   const [age, setAge] = useState()
//   const navigate = useNavigate()

//   const Submit =  (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:3001/Createuser", {name,email,age})
//     .then(result => {
//       console.log(result)
//       navigate('/')
//   })
//     .catch(err => console.log(err))
//   }
//   return (
//     <div className="create-container">
//       <div>
//         <form onSubmit={Submit}>
//           <h1>Add Task</h1>
//           <div>
//             <label>Name</label>
//             <input type="text" placeholder="Enter the Name" onChange={(e) => setName(e.target.value)}/>
//           </div>
//           <div>
//             <label>Email</label>
//             <input type="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}/>
//           </div>
//           <div>
//             <label>Age</label>
//             <input type="text" placeholder="Enter your age" onChange={(e) => setAge(e.target.value)}/>
//           </div>
//           <button>Submit</button>
//           <Link to="/" className="back">
//             Back
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Createuser;

import React from "react";
import "./Createusers.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const Createuser = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createTodo", { task, priority, dueDate }) 
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="create-container">
      <div>
        <form onSubmit={Submit}>
          <h1>Add Task</h1>

          <div>
            <label>Task</label>
            <input
              type="text"
              placeholder="Enter the Task"
              onChange={(e) => setTask(e.target.value)}
            />
          </div>

          <div>
            <label>Priority</label>
            <select onChange={(e) => setPriority(e.target.value)}>
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div>
            <label>Due Date</label>
            <input
              type="date"
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <button>Submit</button>
          <Link to="/" className="back">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Createuser;
