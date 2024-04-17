import './App.css';
import ListUsers from './components/listUsers/listUsers.jsx';
import AddUser from './components/addUser/addUser.jsx';
import EditUser from './components/editUser/editUser.jsx';
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>

      <BrowserRouter>
      <h5>CRUD APP REACT X PHP</h5>
      <nav>
        <ul>
          <li>
            <Link to='/'>List of users</Link>
          </li>
          <li>
            <Link to='user/add'>Add user</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<ListUsers />} />
          <Route path="/user/add" element={<AddUser />} />     
          <Route path="/user/:id/edit" element={<EditUser />} />        
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
