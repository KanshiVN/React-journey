import React, { useEffect, useState } from 'react';

const Home = () => {
    useEffect(()=>{
        console.log("Home is created");
        return ()=>{
            console.log("Home is deleted");            }
    });
    return (
      

        <div className='mt-10 text-center'>
            <h1 className='font-semibold text-4xl mb-10 '>Home </h1>
            <h2 className='font-semibold text-2xl m-auto mb-10'>Hello there welcome to my home</h2>
            <p className='m-auto  h-full w-1/2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aliquid ex magnam ratione nihil eos repellat odio maxime incidunt quod officiis, recusandae reprehenderit eveniet, possimus voluptas et aspernatur rerum quo sequi aperiam nulla? Impedit molestiae esse laudantium aperiam, asperiores quisquam numquam hic neque delectus saepe corrupti, sint fugiat quaerat rem, perspiciatis fugit.
            </p>
            <div className='h-44 w-44 m-auto rounded-full overflow-hidden mt-10'>
            <img src="https://i.pinimg.com/736x/8c/0d/2d/8c0d2d91f0607f5f103de3717eba2f0e.jpg" className='' alt="" />
            </div>
        </div>
    );
}

export default Home;
