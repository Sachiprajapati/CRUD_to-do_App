// import React, { useState } from "react";
// import "./Users.css";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import axios from "axios";

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     axios.get("http://localhost:3001")
//       .then((result) => setUsers(result.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleDelete = (id) => {
//     axios.delete('http://localhost:3001/deleteUser/'+id)
//     .then(res => {console.log(res)
//       window.location.reload()
//     })
//     .catch(errr => console.log(errr))
//   }

//   return (
//     <div className="main-container">
//       <div>
//         <Link to="/Createuser" className="add-btn">
//           Add +
//         </Link>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Age</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={index}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.age}</td>
//                 <td>
//                   <Link to={`/Updateuser/${user._id}`} className="edit-btn">
//                     Update
//                   </Link>
//                   <button className="delete-btn" 
//                   onClick={(e) => handleDelete(user._id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Users;

import React, { useState, useEffect } from "react";
import "./Users.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/deleteTodo/' + id)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="main-container">
      <div>
        <Link to="/Createuser" className="add-btn">
          Add +
        </Link>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Priority</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.task}</td>
                <td>{todo.priority}</td>
                <td>{todo.dueDate}</td>
                <td>
                  <Link to={`/Updateuser/${todo._id}`} className="edit-btn">
                    Update
                  </Link>
                  <button className="delete-btn" onClick={() => handleDelete(todo._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

