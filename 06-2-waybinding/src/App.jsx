import React from 'react'
import { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Submitted by:", name)
    setName('')
  }


  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}> 
        <input type="text"
        placeholder='Enter your name'
        value={name}
        onChange={(e) => {setName(e.target.value)}}
         />
         <br />
         <br />
         <button>submit</button>
      </form>
    </div>
  )
}

export default App
