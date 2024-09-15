import React from 'react';

function Songs() {

    const data = [
        {nameofSong:"Tu hai kahan",description:"Lorem ipsum dolor sit amet consectetur adipisicing"},
        {nameofSong:"Dariya",description:"Lorem ipsum dolor sit amet consectetur adipisicing"},
        {nameofSong:"Tose Naina",description:"Lorem ipsum dolor sit amet consectet analog"}
    ];

    const handleClickDownload = ()=>{alert("Download")};
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-4 items-center  justify-center'>
        {data.map((data,index)=>(
            <div className="song px-3 py-2 bg-zinc-100 rounded w-80" key={index}>
            <h3 className="font-semibold text-sm">{data.nameofSong}</h3>
            <p className='text-xs mt-2'>{data.description}</p>
            <button onClick={handleClickDownload} className='px-2 py-1 bg-blue-400 rounded mt-3 text-xs text-zinc-100'>Download Now</button>
        </div>
        ))}
    </div>
  )
}

export default Songs;