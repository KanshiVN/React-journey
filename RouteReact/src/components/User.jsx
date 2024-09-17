import React from 'react';

const User = () => {
    return (
        <div className='m-auto text-center'>
            <div>Hello this is from the user component</div>
            <div className='w-44 h-44 m-auto mt-20 rounded-full overflow-hidden'>
                <img src="https://i.pinimg.com/736x/34/03/5b/34035bf6bb4adb5f0dcc98b0233dc8df.jpg" 
               className='objevt-cover translate-y-[-20%]' alt="" />
            </div>
            <p className='text-2xl font-mono h-full w-fit m-auto p-2 rounded-full mt-4 bg-red-400'>Hello cuties</p>
        </div>
    );
}

export default User;
