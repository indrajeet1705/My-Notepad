import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
const ViewNotes = () => {
  const {id}=useParams()
  const Note=useSelector((state)=>state.NotePad.NotePad)
  const toShow=Note.find((note)=>note._id===id)
  console.log(toShow)
  return (
    <div className='flex  w-full h-screen'>
      <label className='w-[60vw] h-[70vh] flex p-5 bg-black  mt-6 border rounded-xl'>
        {toShow.value }
      </label>
    </div>
  )
}

export default ViewNotes
