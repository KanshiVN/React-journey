import React from 'react';
import FormCard from './FormCard';

function FormCards({users,handleRemove})  {
    return (
        <div className='w-full  max-h-96 overflow-auto p-4 flex justify-center gap-3 flex-wrap'>
             {users.map((item,index)=>{

             return <FormCard user = {item} handleRemove={handleRemove} key={index} id={index}/>
             })}
             
             
            
        </div>
    );
}

export default FormCards;
