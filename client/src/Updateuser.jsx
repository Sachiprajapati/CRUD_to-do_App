// import React from "react";
// import "./Updateuser.css";
// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react"; 

// const Updateuser = () => {
//   const { id } = useParams();
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [age, setAge] = useState();
//   const navigate = useNavigate();

// useEffect(() => {
//   axios.get('http://localhost:3001/getUser/'+id) 
//     .then(result => {console.log(result)
//       setName(result.data.name)
//       setEmail(result.data.email)
//       setAge(result.data.age)
//     })
//     .catch(err => console.log(err));
// }, [])

// const Update = (e) => { 
//     e.preventDefault();
//     axios.put("http://localhost:3001/Updateuser/"+id, {name,email,age})
//     .then(result => {
//       console.log(result)
//       navigate('/')
//   })
//     .catch(err => console.log(err))
// }
//   return (
//     <div className="create-container">
//       <div>
//         <form onSubmit={Update}>
//           <h1>Update User</h1>
//           <div>
//             <label>Name</label>
//             <input type="text" placeholder="Enter the Name" value={name} onChange={(e) => setName(e.target.value)}/>
//           </div>
//           <div>
//             <label>Email</label>
//             <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//           </div>
//           <div>
//             <label>Age</label>
//             <input type="text" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)}/>
//           </div>
//           <button>Update</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Updateuser;

import React, { useState, useEffect } from "react";
import "./Updateuser.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Updateuser = () => {
  const { id } = useParams();
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/getTodo/${id}`)
      .then((result) => {
        console.log(result);
        setTask(result.data.task);
        setPriority(result.data.priority);
        setDueDate(result.data.dueDate);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/updateTodo/${id}`, {
      task,
      priority,
      dueDate
    })
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create-container">
      <div>
        <form onSubmit={handleUpdate}>
          <h1>Update Task</h1>

          <div>
            <label>Task</label>
            <input
              type="text"
              placeholder="Enter the Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>

          <div>
            <label>Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
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
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default Updateuser;
