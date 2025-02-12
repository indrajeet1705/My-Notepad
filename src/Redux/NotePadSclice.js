import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


const initialState = {
  NotePad : localStorage.getItem("notepad")
  ?JSON.parse(localStorage.getItem('notepad'))
  :[]
}

export const NotePadSlice = createSlice({
  name: 'NotePad',
  initialState,
  reducers: {
    addToNote:(state,action)=>{
      const note=action.payload;
       const noteExists=state.NotePad.some((notes)=>notes.title===note.title)
       if(noteExists){
        toast.error("Note allready exists")
       }
       else if(note.value===''){
        
        toast.error('Invalid Content')
       }
       else{
        state.NotePad.push(note)
      localStorage.setItem('notepad',JSON.stringify(state.NotePad))
      toast.success("Note created Successfully")
    }
      
    },
    updateToNote:(state,action)=>{
       const note=action.payload
       const index=state.NotePad.findIndex((item)=>item._id===note._id)
       
       if(index>=0){
        state.NotePad[index]=note
        localStorage.setItem('notepad',JSON.stringify(state.NotePad))
        toast.success('Note updated Successfully')
       }
       
   

    },
   
    removeFromNote:(state,action)=>{
     const NoteId=action.payload
     console.log(NoteId)
     const index=state.NotePad.findIndex((notes)=>notes._id===NoteId)
     if(index>=0){
      state.NotePad.splice(index,1)
      localStorage.setItem('notepad',JSON.stringify(state.NotePad))
      toast.success('Note deleted Successfully')
     }

    }
    ,
  },
})

export const { addToNote, updateToNote, resetNote,removeFromNote } = NotePadSlice.actions

export default NotePadSlice.reducer 