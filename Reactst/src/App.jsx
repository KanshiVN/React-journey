import React, { useState } from "react";
import Card from "./components/Card";
import Practice from "./components/Practice";

function App() {

  const data = [
    {name:"Amit",profession:"mistry",image:"https://images.unsplash.com/photo-1496346236646-50e985b31ea4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"Sneha",profession:"WebDev",image:"https://images.unsplash.com/photo-1611272585212-5a3b87b63294?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"Neha",profession:"Teacher",image:"https://images.unsplash.com/photo-1536331307320-5316320e97cc?q=80&w=1344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name:"Rakesh",profession:"Farmer",image:"https://images.pexels.com/photos/3019836/pexels-photo-3019836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",friends:false}
  ]

  const [realData,setVal] =  useState(data);
  const handleButton = (cardIndex)=>{
    setVal((prev)=>{
      return prev.map((item,index)=>{
        if(index === cardIndex){
        return {...item, friends: !item.friends}
        }
        return item;
      })
    })
  }

  return (
    <>
    
      {/* <Practice name ="Kanshi" age = "12" gender = "male" /> */}
      <div className="w-full h-screen flex items-center justify-center gap-2">
        {realData.map((item,index)=>(
          <Card key={index} index ={index } values={item} handleClick = {handleButton}/>
        ))}
      </div>
      
    </>
  );
}

export default App;

// onClick={()=>setVal({...val,isBanned:!val.isBanned})}

  /* <button onClick={()=>setVal(()=>{return val.filter((item,index)=>index != val.length - 1)})} */
  // setVal(()=>val.map(item=>item.name==="om"? ({name:"om",age:13}):item))
