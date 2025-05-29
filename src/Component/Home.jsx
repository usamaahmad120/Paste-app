import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

function Home() {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchpharams, setSearchpharams] = useSearchParams();
  const pasteId = searchpharams.get("pasteId");
  const dispatch = useDispatch();


  function createPaste(){
    const paste ={
      title: title,
      content: value,
      _id :pasteId || 
      Date.now().toString(36),
      createdAt : new Date().toISOString 
    }

    if(pasteId){
      // update 
      dispatch(updateToPastes(paste))

    }
    else {
      // create 
      dispatch(addToPastes(paste))
    }

    // after creation and updation 
    setTitle('');
    setValue('');
    setSearchpharams({});
  }

  return (
    <>
    <div className='flex flex-row gap-4 place-content-between mt-10' >
      <input className='p-2 rounded-full mt-2 border border-black w-[60%] pl-4'
      type="text" 
      placeholder='enter title' 
      value={title} 
      onChange={e => setTitle(e.target.value)} />

      <button
        onClick={createPaste}
       className=' p-2 rounded-full mt-2 border border-black'>
        {
          pasteId ? "Update my paste" : "Create my paste"
        }
      </button>
    </div>
    <div className='mt-4'>
      <textarea 
      className='border min-w-160 p-4'
      value={value}
      placeholder='enter your content'
      onChange={e => setValue(e.target.value)}
      rows={20}
      
      ></textarea>
    </div>
    </>
  )
}

export default Home