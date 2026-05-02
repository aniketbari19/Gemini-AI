import React from 'react'
import SideBar from './components/SideBarr/SideBar'
import Main from './components/Main/Main'


const App = () => {
  return (
    <div className='flex h-screen w-screen'>
      <SideBar />
      <Main />

    </div>
  )
}

export default App