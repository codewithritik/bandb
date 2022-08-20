
import './App.css';
import "./style/input.css"

import { Route, Routes } from 'react-router-dom';
import { Login } from './component/login/login';
import { Register } from './component/resgister/register';
import { Admin } from './component/admin/admin';
import { Private } from './privaterouter/private';
import { Navbar } from './component/Navbar/navbar';


function App() {
  return (

    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Private><Admin /></Private>} />
      </Routes>
     
        
 
    </div>
  );
}

export default App;
