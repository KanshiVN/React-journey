import React,{useState} from "react";



function Songs({data,clickHandler,index}){
    const {songName,artistName,image,addToFavourite} = data;
    return(
        <div className=" relative w-60 bg-zinc-100 p-4  pb-10 rounded-md flex  justify-between mt-10">
            <div className=" w-24 h-24 pb-10 bg-orange-500 rounded-md overflow-hidden">
                <img  src={image} />
            </div>
            <div > 
                <h3 className="font-semibold leading-none text-xl mt-2 mb-1 ">{songName}</h3>
                <h6>{artistName}</h6>
            </div>
            <button onClick={()=>clickHandler(index)} className={`whitespace-nowrap text-white absolute rounded-full  ${addToFavourite === false ? " bg-orange-600 px-4 py-3 top-24 left-10 mt-8 ":" bg-green-600 px-4 py-3 top-24 left-20 mt-8 "}`}>{addToFavourite?"Added":"Add to Favourite"}</button>
        </div>
    )
}


export default Songs