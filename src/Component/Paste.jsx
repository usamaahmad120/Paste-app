import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Paste() {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchItems, setSearchItem] = useState("");
  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchItems.toLowerCase())
  );

  return (
    <>
      <div>
        <input
          className="p-2 rounded-full mt-2 border border-black w-[600px] pl-4 mt-10"
          type="search"
          placeholder="Search here"
          value={searchItems}
          onChange={(e) => setSearchItem(e.target.value)}
        />

        <div className="flex flex-col gap-5 mt-4">
          {filterData.length > 0 ? (
            filterData.map((paste) => (
              <div className="border p-2" key={paste._id}>
                <h2 className="font-bold">{paste.title}</h2>
                <p className="text-gray-800 whitespace-pre-wrap">{paste.content}</p>
                <div className="flex flex-row  gap-5 place-content-evenly bg-white p-8">
                <button  className="border-2 border-black text-black px-4 py-2 rounded">edit</button>
                <button>view</button>
                <button>Date</button>
                <button>edit</button>
                </div>
                <p className="text-sm text-gray-600">{paste.createdAt}</p>
              </div>
              

            ))
            
          ) : (
            <p className="text-gray-500 mt-4">No pastes found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Paste;
