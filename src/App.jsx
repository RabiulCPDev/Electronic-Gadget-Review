import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Test/Component/Dashboard'
// import Form from "./Admin/InsertForm"
// import AdminDashboard from './Test/Dashboard.js'
import TEs from "./Test/Component/TEs" 
import MainBoard from './Test/Component/MainBoard.jsx'
import Edit from './Test/Component/Edit'
import Add from "./Test/Component/Add";
import Login from "./Test/Component/LoginPage";
import Body from "./User/Body";
function App() {
  return (
   
    <>
  <BrowserRouter>
         <Routes>
            <Route  path='/Edit' element={<Edit/>} />
            <Route  path='/Add' element={<Add/>} />
            <Route path='/admin' element={<MainBoard/>} />
            <Route path='/admin/login' element={<Login/>} />
            <Route path='/' element={<Body/>} />
        </Routes>
  </BrowserRouter>
        
    </>
  )
}

export default App
