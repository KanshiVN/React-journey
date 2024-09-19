import React, { useContext } from 'react';
import Userdetails from './Userdetails';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/Context';


const User = () => {
    const {users} = useContext(UserContext);
    return (
        <div className=" font-semibold text-xl" >
          <h1>User list: </h1>
          <div className=' mt-10 flex flex-col gap-2'>
            {users.map((u)=> (
                <Link to = {`/user/${u.id}`} className='p-3  bg-blue-300' key={u.id}>{u.userName}</Link>
            ))}
           
          </div>
        </div>

    );
}

export default User;
