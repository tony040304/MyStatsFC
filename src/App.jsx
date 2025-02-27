import { useState } from 'react'
import Cho from '/cho.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='m-auto'>
        <div className='bg-gray-900 flex flex-col w-96 h-auto m-auto my-64 rounded-xl'>
          <div className='flex flex-row content-center '>
              <img src={Cho} alt="" className='w-24 rounded-full object-cover m-8 mb-0'/>
              <h6 className='text-slate-200 mt-12 text-xl'>Antonio Torralba</h6>
          </div>
          <div className='flex flex-col ml-auto mr-auto'>
            <h3 className='text-slate-300'>Goles:</h3>
            <div className='flex flex-row'>
              <h1 className='text-slate-400'>MAG: </h1>
              <h1 className='text-slate-400'> 10/50</h1>
            </div>
            <h1 className='text-slate-300'>Total:15/65</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
