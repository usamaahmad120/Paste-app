import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

function Home() {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(), // ✅ Function is called correctly
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    // Reset state and search params
    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <>
      <div className='flex flex-row gap-4 place-content-between mt-10'>
        <input
          className='p-2 rounded-full mt-2 border border-black w-[60%] pl-4'
          type="text"
          placeholder='Enter title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button
          onClick={createPaste}
          className='p-2 rounded-full mt-2 border border-black'
        >
          {pasteId ? "Update my paste" : "Create my paste"}
        </button>
      </div>
      <div className='mt-4'>
        <textarea
          className='border min-w-160 p-4'
          value={value}
          placeholder='Enter your content'
          onChange={e => setValue(e.target.value)}
          rows={20}
        ></textarea>
      </div>
    </>
  );
}

export default Home;
