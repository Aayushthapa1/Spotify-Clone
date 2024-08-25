import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'

const App = () => {
  return (
    <div className='h-screen bg-black' >
      <div className='flex h-[90%]'>
      <Sidebar />
      </div>
      <Player/>
    </div>

  )
}

export default App
