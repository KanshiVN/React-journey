import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes,Link,Route ,NavLink} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import User from './components/User';

function App() {


  return (
    <>
      <nav className='h-full  flex justify-center gap-9 font-semibold text-2xl mb-24 bg-blue-100'>
       <NavLink style={(e)=>{
        return{
          color: e.isActive ? "tomato":"",
           fontWeight:e.isActive ?"bold" :""
        }
       }} to="/">Home</NavLink>
       <NavLink style={(e)=>{
        return{
          color: e.isActive ? "tomato":"",
          fontWeight:e.isActive ?"bold" :""

        }
       }}  to="/about">About</NavLink>
       <NavLink style={(e)=>{
        return{
          color: e.isActive ? "tomato":"",
          fontWeight:e.isActive ?"bold" :""

        }
       }}  to="/user"> User</NavLink>
      </nav>

      <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/about" element ={<About/>}/>
          <Route path = "/user" element = {<User/>}/>
      </Routes>

    </>

  )
}

export default App;
