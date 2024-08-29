import React from 'react'
import DisplayHome from './DisplayHOme'
import { Routes , Route} from 'react-router-dom'


const Display = () => {
  return (
    <div className='w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path ='/' element={DisplayHome} />
      </Routes>
    </div>
  )
}

export default Display
