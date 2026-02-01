import React, { useEffect, useState } from 'react'

const App = () => {
  
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function achanging() {
   console.log('a is changing') 
  }
   function bchanging() {
   console.log('b is changing') 
  }

   useEffect((function() {
    console.log( achanging() ,"use effect is running....");
    
   }), [a ,b])

  return (

    <div>
      <h1>a: {a}</h1>
      <h1>b: {b}</h1>
      <button 
        onClick={()=>{
          setA(a+1)
        }}
      >Click a</button>

      <button 
      onClick={()=>{
        setB(b-1)
      }}>
        Click b</button>
    </div>
  )
}

export default App
