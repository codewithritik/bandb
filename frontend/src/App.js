
import './App.css';
import "./style/input.css"

import { Route, Routes } from 'react-router-dom';
import { Login } from './component/login/login';
import { Register } from './component/resgister/register';
import { Admin } from './component/admin/admin';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
     
        
 
    </div>
  );
}

export default App;
