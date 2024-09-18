import React from "react";


function FormCard ({user,handleRemove,key,id}) {
    return (
       <>
       
         <div className="w-52 rounded-lg h-full bg-zinc-100 flex flex-col items-center" >
                <div className="w-20 h-20 rounded-full bg-blue-200 overflow-hidden mt-1">
                    <img className = "object-cover w-full h-full object-top " src={user.image} alt="" />
                </div>
                <h1 className="mt-1  text-xl font-semibold text-center">{user.name}</h1>
                <h2 className="mt-1  text-sm ">{user.email}</h2>
                <p className="text-center text-xs p-3 font-semibold leading-1 tracking-tight mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti non impedit cum laboriosam!</p>

                <button onClick={()=>handleRemove(id)} className="px-3 py-2 mb-2 bg-red-600 rounded-md mt-4 text-xs font-semibold text-white">Remove It</button>
         </div>
       
       </>
    );
}

export default FormCard;
