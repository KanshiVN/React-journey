import React, { useState } from "react";

function App() {
 
  return (
    <div>
      {val.map((item, key) => (
        <div key={key}>
        <h1>{item.name} </h1>
        <h2>{item.age}</h2>
        </div>
      ))}

      <button
        
        className="my-2 bg-blue-400 text-white rounded-md "
      >
        ClickChange
      </button>
    </div>
  );
}

export default App;

// onClick={()=>setVal({...val,isBanned:!val.isBanned})}

  /* <button onClick={()=>setVal(()=>{return val.filter((item,index)=>index != val.length - 1)})} */
  // setVal(()=>val.map(item=>item.name==="om"? ({name:"om",age:13}):item))
