import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = ({handleFormSubmitData}) => {
const {register,handleSubmit,reset}=useForm();
const handleTheForm = (data) =>{
    handleFormSubmitData(data);
    reset();
}
    return (
        <div className='mt-20 flex justify-center'>
            <form action="" className='flex gap-8' onSubmit={handleSubmit(handleTheForm)}>
                <input {...register('name')}className='rounded-md px-2 py-1 text-base outline-none' type="text" placeholder='name'/>
                <input {...register('email')}className='rounded-md px-2 py-1 text-base outline-none' type="text" placeholder='email'/>
                <input {...register('image')}className='rounded-md px-2 py-1 text-base outline-none' type="text" placeholder='image url'/>
                <input type="submit" className='px-5 py-2 rounded-md bg-blue-600 font-semibold text-white' />
            </form>
        </div>
    );
}

export default Form;
