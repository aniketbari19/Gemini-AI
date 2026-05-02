import React, { useContext, useState } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import { geminiContext } from '../context/Context';

const SideBar = () => {

  const [extended, setExtended] = useState(false)

  const { prevPrompts, onSent, setRecentPrompts, newChat } = useContext(geminiContext)

  const loadPrompt = async (prompt) => {
    setRecentPrompts(prompt)
    await onSent(prompt)
  }



  return (
    <div className='sideBar h-screen bg-[#f0f4f9] px-4  py-7 flex flex-col justify-between items-center'>
      <div className='flex flex-col items-start justify-start'>
        <div onClick={() => setExtended(prev => !prev)} className='cursor-pointer flex px-4 items-center '>
          <MenuOutlinedIcon />
        </div>
        <div onClick={()=>newChat()} className='inline-flex justify-start cursor-pointer items-center mt-10 bg-[#e6eaf1] px-3 py-3 gap-2 rounded-full'  >
          <AddOutlinedIcon className=' text-gray-500' fontSize='large' />
          {extended ? <h3 className='text-[16px] text-gray-500 '>New Chat</h3> : null}
        </div>
        {extended ? <div className="w-full mt-6 ">
          <h3 className='recent text-xl font-semibold'>Recent</h3>
          {prevPrompts.map((elem, idx) => {
            return (<div onClick={() => loadPrompt(elem)} className='flex justify-start items-center gap-2 cursor-pointer mt-5 hover:bg-[#e6eaf1] px-4 py-2 rounded-full'>
              <ModeCommentOutlinedIcon fontSize='20px' />
              <p className='text-[15px]  ' key={idx}>{elem.slice(0, 16)}...</p>
            </div>
            )

          })}

        </div> : null}
      </div>

      <div className='w-[80%] flex flex-col justify-center items-start gap-3 '>
        <div className='flex justify-start items-center  cursor-pointer gap-3 text-gray-900 hover:bg-[#e6eaf1] pl-2 pr-8 py-2  rounded-full' >
          <HelpOutlineIcon fontSize='medium' />
          {extended ? <h3 className='text-[16px] font-semibold  '>Help</h3> : null}
        </div>
        <div className='flex justify-start items-center cursor-pointer gap-3 text-gray-900 hover:bg-[#e6eaf1]  pl-2 pr-8  py-2 rounded-full'>
          <HistoryIcon fontSize='medium' />
          {extended ? <h3 className='text-[16px] font-semibold  '>History</h3> : null}
        </div>
        <div className='flex justify-start items-center cursor-pointer gap-3 text-gray-900 hover:bg-[#e6eaf1] pl-2 pr-8  py-2 rounded-full'>
          <SettingsIcon fontSize='medium' />
          {extended ? <h3 className='text-[16px] font-semibold  '>Settings</h3> : null}
        </div>
      </div>
    </div>
  )
}

export default SideBar