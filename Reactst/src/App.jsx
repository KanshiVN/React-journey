import React, { useRef, useState } from "react";
import FormCards from "./components/FormCards";
import Form from "./components/Form";


function App(){

  const [users,setUsers]=useState([]);
  const handleFormSubmitData =(data)=>{
      setUsers([...users,data])
  }
  const handleRemove=(id) =>{
    setUsers(()=>users.filter((item,index)=>index!=id))
  }
  return (
        <div className="w-full h-screen bg-slate-400 flex items-center justify-center">
            <div className="container mx-auto "> 
              <FormCards handleRemove ={handleRemove}  users = {users}/>
              <Form handleFormSubmitData = {handleFormSubmitData}/>
            </div>
        </div>
  );
}

export default App;

// onClick={()=>setVal({...val,isBanned:!val.isBanned})}

  /* <button onClick={()=>setVal(()=>{return val.filter((item,index)=>index != val.length - 1)})} */
  // setVal(()=>val.map(item=>item.name==="om"? ({name:"om",age:13}):item))
