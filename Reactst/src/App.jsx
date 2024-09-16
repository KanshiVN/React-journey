import React, { useRef, useState } from "react";




function App(){

  const name = useRef(null);
  const age = useRef(null);
  const submitData =(data)=>{
    data.preventDefault();
      console.log(name.current.value)
      console.log(age.current.value)
  }


  return (

    <>
     <form action="" className="mt-20 ml-20"  onSubmit={submitData}>
      <input type="text" ref={name} placeholder="name" className="border-red-200"/>
      <input type="text" ref={age} placeholder ="age" />
      <input type="submit"/>
     </form>
    </>
  );
}

export default App;

// onClick={()=>setVal({...val,isBanned:!val.isBanned})}

  /* <button onClick={()=>setVal(()=>{return val.filter((item,index)=>index != val.length - 1)})} */
  // setVal(()=>val.map(item=>item.name==="om"? ({name:"om",age:13}):item))
