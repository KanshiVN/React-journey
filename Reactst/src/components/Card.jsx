import React,{useState} from 'react';


function Card({values,handleClick,index}){  
const {name,profession,image,friends} = values;
// props

  return(

        <div className='w-38 p-2 '>
          <div className='w-36 h-52 bg-slate-200 rounded overflow-hidden'>
            <div className='w-full h-32 bg-slate-50  '>
              <img className='w-full h-full  object-cover' src={image} alt="" />
            </div>
            <h1 className='ml-1 font-semibold'>Name :{name}</h1>
            <h4 className='ml-1 text-xs'>Bio: {profession}</h4>
            <button onClick={()=>handleClick(index)}
            className={`text-xs ${friends?"bg-green-500":"bg-blue-500"} rounded p-1 ml-1 mt-1 text-white`}>{friends === true ? "Friends":"Add friends"}</button>
          </div>
        </div>
      
  )
}

export default Card;

// props use hote hai components ko  reusable banane ke liye
  