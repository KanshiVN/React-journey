import React, { useState } from "react";
import Songs2 from "./components/Songs2";
import Navbar from "./components/Navbar";

function App() {
    const data = [
      {image:"https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",songName:"Bella", artistName:"Jessica",addToFavourite:false},
      {image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",songName:"Blue Sky", artistName:"Natasha",addToFavourite:false},
      {image:"https://images.unsplash.com/photo-1726164959171-291645df9ed9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",songName:"Empty", artistName:"Kanshi",addToFavourite:true},
      {image:"https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",songName:"Mountain", artistName:"Tim Stief",addToFavourite:false},
    ]

    const [songData,setData] = useState(data);
    const clickHandler =(index)=>{
      setData((prev)=>{
      return  prev.map((item,itemIndex)=>{
        if(index === itemIndex ) return{...item, addToFavourite : !item.addToFavourite}
        return item;
      })
      })
    }

  return (
    <>
      <div className="w-full h-screen bg-slate-300"> 
         <Navbar data={songData}/>
         <div className="px-20 mt-32 flex gap-10 flex-wrap">
          {songData.map((item,key)=>{
            return <Songs2 data = {item} key={key} index={key} clickHandler = {clickHandler}/>
          })
        }
         </div>
      </div>
    </>
  );
}

export default App;

// onClick={()=>setVal({...val,isBanned:!val.isBanned})}

  /* <button onClick={()=>setVal(()=>{return val.filter((item,index)=>index != val.length - 1)})} */
  // setVal(()=>val.map(item=>item.name==="om"? ({name:"om",age:13}):item))
