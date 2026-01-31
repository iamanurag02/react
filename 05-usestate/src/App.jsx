import React from 'react'
import { useState } from 'react'


const App = () => {
   
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  } 

  return (
   <div className='bg-black'>
     <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
      <h1 className="bg-gray-500 text-white px-4 py-2 rounded-full ml-4">{count}</h1>
     <div className='flex items-center justify-center'>
       <button className="bg-gray-500 text-white px-4 py-2 rounded ml-4" onClick={increaseCount}>Increase</button>
      <button className="bg-gray-500 text-white px-4 py-2 rounded ml-4" onClick={decreaseCount}>Decrease</button>
     </div>
    </div>
   </div>
  )
}

export default App
