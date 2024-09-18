import axios from './Axios';
import React, { useEffect, useState } from 'react';

const Show = () => {
    
  const [product,setProducts] = useState([])

  const getProcucts = () =>{
    const api ='/products';
    axios.get(api).then(products =>{
      console.log(products)
      setProducts(products.data)
    }).catch(err =>{
      console.log(err)
    })
  }
  
  useEffect(()=>{
    getProcucts();    
  })

    return (
        <div>
             
      <ul className="m-12 px-5 py-4  w-fit">
      {product.length > 0 ? product.map((p,index )=>  <li key={index} className='mb-1 bg-red-300 py-3 px-1 '>{p.title}</li>):<h1>Loading...</h1>}
       
      </ul>
        </div>
    );
}

export default Show;
