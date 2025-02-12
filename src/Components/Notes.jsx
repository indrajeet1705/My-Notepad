import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromNote } from "../Redux/NotePadSclice";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
const Notes = () => {
  const NotePad = useSelector((state) => state.NotePad.NotePad);
  const dispatch = useDispatch();
  console.log(NotePad);

  const [search, setSearch] = useState("");
  const filterdata = NotePad.filter((Note) =>
    Note.title.toLowerCase().includes(search.toLowerCase())
  );

  function handleDelete(NoteId) {
    dispatch(removeFromNote(NoteId));
  }

  

  return (
    <div>
      <div className="gap-6 justify-center flex">
        <input
          type="text"
          placeholder="search here . . ."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="p-3 pl-5 rounded-xl mt-6 w-[40vw]"
        />
      </div>
       <div className="border  mt-7 w-[60vw] h-16 text-4xl rounded-t-lg text-left p-2 pl-10"> All Notes </div>
      <div  className=" border w-[60vw] h-[65vh] overflow-y-auto rounded-b-lg   flex flex-col custom-scrollbar  p-3">
        {filterdata.map((Note) => {
          return (
            <div  key={Note._id} className="border  my-4 mx-auto p-3 place-content-between flex rounded-lg w-[55vw] ">
              <div className="flex flex-col">
                <p className="text-xl font-semibold left-0 flex text-red-500">
                  {" "}
                  {Note.title}
                </p>
                <p className=" left-0 flex"> {Note.createdAt}</p>
               
              </div>

              <div className="flex  gap-5">
                <button
                
                >
                 <a href={`/?NoteId=${Note._id}`}>
                 <p className="text-white">Edit</p>
                 </a>
                </button>
                <button>
                  <NavLink
                  to={`/notes/${Note?._id}`}
                  > <p className="text-white">view</p></NavLink>
                  </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(Note.value);
                    toast.success("Copied to clipboard");
                  }}
                >
                  Copy
                </button>
                <button onClick={() => handleDelete(Note?._id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
