import React from 'react'
import Navbar from '../../Navbar/Navbar'

const NuevoFichaje = () =>  {
  return (
    <>
      <Navbar />
      <div className='min-h-screen w-full flex flex-col items-center justify-center p-2'>
          <h1 className='text-3xl mb-4 bg-pink-900 rounded-lg p-2'>Buscar jugador</h1> 
          <input type="text" placeholder="Introduce el nombre del jugador" className='w-1/2 mb-4 p-2 border-2 rounded-xl' />
          <button className='w-1/2 mb-4 p-2 border-2 rounded-xl bg-gray-700/60 text-amber-50 hover:text-pink-500/60 hover:border-pink-500/60 cursor-pointer'>Buscar</button>
      </div>
    </>
  )
}

export default NuevoFichaje