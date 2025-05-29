import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Paste() {
  const pastes = useSelector((state) => state.paste.pastes);

  const [seaechItems, setSearchItem] = useState("");

  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(seaechItems.toLocaleLowerCase())
  );



  return(
  <>
  <div>
    <input
    className="p-2 rounded-full mt-2 border border-black w-[600px] pl-4 mt-10"
     type="search"
     placeholder="search here"
     value={seaechItems}
     onChange={(e) => setSearchItem(e.target.value)}
     
     />

  </div>
  
  </>
)

}




export default Paste;
