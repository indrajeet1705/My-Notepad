import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToNote, updateToNote } from "../Redux/NotePadSclice";
const Home = () => {
  const [titleinput, settitleinput] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchparams] = useSearchParams();

  const NoteId = searchParams.get("NoteId");

  const dispatch = useDispatch();
  const Notes = useSelector((state) => state.NotePad.NotePad);


  useEffect(() => {
    if(NoteId){
      const note = Notes.find((note) => note._id === NoteId)
      
    settitleinput(note.title);
    setValue(note.value);
    }
    
  }, [NoteId])


  function createNote() {
    const date=new Date()
    const note = {
      title: titleinput,
      value: value,
      _id: NoteId || Date.now().toString(36),
      createdAt:date.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }),
    };
  

    if (NoteId) {
      dispatch(updateToNote(note));
    } else {
      dispatch(addToNote(note));
    }

    setValue("");
    settitleinput("");
    setSearchparams({});
  }

  function handleClear() {
    setValue("");
    settitleinput("");
    setSearchparams({});
  }

  return (
    <div className="gap-2  flex flex-col ">
      <div className="gap-6 justify-center flex">
        <input
          type="text"
          placeholder="enter title here"
          className="p-3 pl-5 rounded-xl mt-6 w-[40vw]"
          value={titleinput}
          onChange={(e) => settitleinput(e.target.value)}
        />
        <button className="p-3 rounded-xl mt-6" onClick={createNote}>
          {NoteId ? "Update Note" : "Add Note"}
        </button>
      </div>

      <div className="flex flex-col">
        <textarea
          className="p-4 w-[60vw] mt-2  rounded-lg"
          placeholder="enter content here"
          rows={20}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
        <button onClick={handleClear} className="p-3 mt-2 w-24 right-0">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Home;
