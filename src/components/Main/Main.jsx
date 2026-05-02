import React, { useContext } from 'react'
import ExploreIcon from '@mui/icons-material/Explore';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CodeIcon from '@mui/icons-material/Code';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import Context, { geminiContext } from '../context/Context';


const Main = () => {

  const { onSent, recentPrompts, showResult, loading, resultData, input, setInput } = useContext(geminiContext)


  return (
    <div className='h-screen w-screen p-3 relative min-h-[100vh]'>
      <div className="h-[70px] w-full flex justify-between items-center">
        <h2 className='text-2xl text-gray-500 font-semibold'>Gemini</h2>
        <img className='h-[40px] w-[40px] object-cover rounded-full' src="https://images.unsplash.com/photo-1695927621677-ec96e048dce2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww" alt="" />
      </div>
      <div className="main-content absolute top-20 left-15 right-15 flex flex-col
       justify-between ">
        {!showResult ? <div className=' ml-40 mt-16'>
          <div className='pl-8' >
            <span className='greet text-[65px] font-semibold'>Hello, Aniket.</span>
            <p className='greet2 text-[55px] leading-20 font-light text-gray-400'>How can i help you today?</p>

          </div>
          <div className='main2'>
            <div className='cards bg-[#f0f4f9] text-gray-500 hover:bg-[#e6eaf1] cursor-pointer h-[220px] w-[14vw] p-[15px] rounded-2xl mr-20 relative'>
              <p className='text-[17px] font-mono  '>Suggest Beautiful places to see on an upcoming road trip</p>
              <ExploreIcon className='absolute right-5 bottom-3' />
            </div>
            <div className='cards bg-[#f0f4f9] text-gray-500 hover:bg-[#e6eaf1] cursor-pointer h-[220px] w-[14vw] px-5 py-3 relative rounded-2xl'>
              <p className='text-[17px] font-mono  '>Briefly summarize this concept : urban planning</p>
              <EmojiObjectsIcon className=' absolute right-5 bottom-3' />
            </div>
            <div className='cards bg-[#f0f4f9] text-gray-500 hover:bg-[#e6eaf1] cursor-pointer h-[220px] w-[14vw] px-5 py-3 relative rounded-2xl'>
              <p className='text-[17px] font-mono  '> Brainstorm team bonding activities for our work</p>
              <ChatBubbleOutlineIcon className=' absolute right-5 bottom-3' />
            </div>
            <div className='cards bg-[#f0f4f9] text-gray-500 hover:bg-[#e6eaf1] cursor-pointer h-[220px] w-[14vw] px-5 py-3 relative rounded-2xl'>
              <p className='text-[17px] font-mono  '>Tell me about React js and React native</p>
              <CodeIcon className='absolute right-5 bottom-3' />
            </div>
          </div>
        </div> :
          <div className='result mx-20 mt-5 max-h-[65vh] overflow-scroll'>
            <div className='flex justify-start items-center gap-5' >
              <img className='h-[35px] w-[35px] object-cover rounded-full' src="https://images.unsplash.com/photo-1695927621677-ec96e048dce2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww" alt="" />
              <p className='text-[17px]'>{recentPrompts}</p>
            </div>
            <div className='resultEntry  flex justify-start items-start  gap-5  mt-6'>
              <img className='h-[35px] w-[35px] object-cover rounded-full' src="data:image/jpeg;base64,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" alt="" />
              {loading ? <div className="loading">
                <hr />
                <hr />
                <hr />
              </div>
                : <p className='text-[17px] leading-[2vw]' dangerouslySetInnerHTML={{ __html: resultData }}></p>}


            </div>
          </div>}
      </div>
      <div className='felx flex-col justify-center items-start p-5 absolute bottom-4 right-15 left-15 mt-20 '>
        <div className="search-box flex justify-between items-center px-8 py-5 mx-30 rounded-full bg-[#f0f4f9]  text-gray-700 ">
          <input
            type="text"
            placeholder='Enter a prompt here'
            className='text-[19px] border-none outline-none w-[80%]'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className='icons flex justify-center items-center cursor-pointer gap-4'>
            <AddPhotoAlternateIcon fontSize='medium' />
            <MicIcon fontSize='medium' />
            <div onClick={() => onSent()}><SendIcon fontSize='medium' /></div>
          </div>


        </div>
        <div id='' className='main-bottom mt-5 text-lg text-center'>
          <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
      </div>
    </div>
  )
}

export default Main