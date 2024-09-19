import { useState } from 'react'

function App() {
  const [val,setVal] = useState(
    [
    {name:"kanshi",age:21},
    {name:"omega",age:32}
    ]
  )
    
  return (
   
    <>
    {val.map(item => (
      <div key={item.age}>
      <h1>{item.name}</h1>
      <h1>{item.age}</h1>
      </div>
      ))}
     <button onClick={()=> setVal(()=> val.map(item=>item.name==="kanshi"? ({name :"kanshi",age:20}):item ))} className='bg-blue-500 p-4 m-3 rounded-sm'>Remove false</button>
    
    </>
  )
}

export default App
