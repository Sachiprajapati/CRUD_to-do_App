import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Createuser from './Createuser'
import Users from './Users'
import Updateuser from './Updateuser'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/Createuser' element={<Createuser />}></Route>
        <Route path='/Updateuser/:id' element={<Updateuser />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
