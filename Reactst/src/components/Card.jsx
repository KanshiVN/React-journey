import React from 'react';

function Card(){
  const data = [
    {image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name: 'Amazon basics',description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum doloribus cum?',instock:false},
    {image:'https://images.pexels.com/photos/1207875/pexels-photo-1207875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name:'Monkey Man',description: 'lorem Ips again and again and again and again and again and again and again and again and again and again',instock:false},
    {image:'https://images.pexels.com/photos/4049991/pexels-photo-4049991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name:'Lady Work',description: 'lorem Ips again and again and again and again omegamet aliquet lore tellus et laa aliquet fkaf   fakjfal alllka al',instock:true}
  ];

  return(
    <div className="bg-zinc-600 w-screen h-screen flex items-center justify-center gap-10 ">
       {data.map((data,index)=>(
         <div className=" w-36 h-44 bg-slate-200 rounded overflow-hidden" key={index}>
         <img src={data.image} className='h-26 w-full object-cover ' />
          <div className='ml-2'>
              <h1 className="text-xs font-serif">{data.name}</h1>
              <p className='text-[5px]  mt-1'>{data.description}
              </p>
              <button className={`px-2 py-1 ${data.instock ? "bg-sky-600":"bg-red-500"} text-xs rounded text-zinc-100 mt-2`}>{data.instock ? "In stock":"Out of stock"}</button>
           </div>
        </div>
       ))}

    </div>
  )
}

export default Card

// 
