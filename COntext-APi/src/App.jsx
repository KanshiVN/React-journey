import React,{useState} from 'react';
import User from './components/User';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
const App = () => {
   
  return (
    <div className="px-40 py-2 ">
      
      <nav className="flex justify-center gap-20 font-semibold font-mono p-3 text-2xl">
                <NavLink to = "/" >Home</NavLink>
                <NavLink to = "/user">User</NavLink>
                <NavLink to = "/about">About</NavLink>
            </nav>

            <Routes>
                <Route path='/' element ={<Home/>}></Route>
                <Route path='/user' element ={<User/>}></Route>
                <Route path='/about' element ={<About/>}></Route>
                
            </Routes>

           
    
    </div>
  );
}

export default App;
