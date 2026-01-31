import React, { useState,  } from 'react'

const App = () => {
   const [title, setTitle] = useState('')
   const [detail, setDetail] = useState('') 
   
   const [tasks, setTasks] = useState([]) 

  const submitHandler = (e) => {
    e.preventDefault()
   
    const copyTasks = [...tasks]
    copyTasks.push({ title, detail})
    setTasks(copyTasks)

    console.log(copyTasks);

   setTitle('');
   setDetail('');
  }

 const deleteNote = (idx) => {
    const copyTask = [...tasks];

    copyTask.splice(idx, 1)

    setTasks(copyTask)
  }


  return (
    <div className='h-screen lg:flex bg-black text-white' >
     <form onSubmit={(e) =>{ submitHandler(e)}} 
          className='flex p-10  lg:w-1/2 items-start flex-col gap-4   '>
       
         <input
        className='px-5 w-full py-2 border-2 border-gray-300 rounded-md '
         type="text"
         placeholder='Enter task Heading' 
         value={title}
         onChange={(e)=>{
         setTitle(e.target.value);
         }
         }
         />


        <textarea
        className='px-5 h-32 py-2 w-full border-2 flex  outline-none items-start flex-row border-gray-300 rounded-md '
         type="text" 
         placeholder='Enter task detail'
         value={detail}
         onChange={(e)=>{
          setDetail(e.target.value);
         }}

        />

       <button className='bg-white  active:scale-90 w-full text-black px-5 py-2 rounded-md'>Add Note</button>
    
     </form>
     <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div className='flex gap-5 mt-5 h-full flex-wrap overflow-auto '>
       {tasks.map(function (elem, idx) {

            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.detail}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
     </div>
     </div>
    </div>
  )
}

export default App
