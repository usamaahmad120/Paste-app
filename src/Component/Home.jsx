import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

function Home() {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchpharams, setSearchpharams] = useSearchParams();
  const pasteId = searchpharams.get("pasteId");

  return (
    <>
    <div className='flex flex-row gap-4 place-content-between mt-10' >
      <input className='p-2 rounded-full mt-2 border border-black w-[60%] pl-4'
      type="text" 
      placeholder='enter title' 
      value={title} 
      onChange={e => setTitle(e.target.value)} />

      <button className=' p-2 rounded-full mt-2 border border-black'>
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