import React from 'react'
import Navbar from '../../Navbar/Navbar'

const EditarEquipo = () => {
  return (
    <>
      <Navbar />
        <div className='min-h-screen flex flex-col items-center justify-center p-2'>
            <div className='bg-gray-700/50 rounded-xl w-1/4 flex flex-col items-center p-2 justify-center'>
                <h1 className='text-3xl p-2'>Nombre</h1>
                <input className='mb-2 p-2 border-2 rounded-xl w-full' type="text" placeholder='Ingrese el nuevo nombre del equipo'/>
                <h1 className='text-3xl p-2'>Abreviatura</h1>
                <input className='mb-2 p-2 border-2 rounded-xl w-full' type="text" placeholder='Ingrese la nueva abreviatura del equipo'/>
                <h1 className='text-3xl p-2'>Logo</h1>
                <input className='mb-2 p-2 border-2 rounded-xl w-full' type="text" placeholder='Ingrese el nuevo logo del equipo'/>
                <button className='mb-4 p-2 w-1/2 border-2 rounded-xl bg-gray-700/60 text-amber-50 hover:text-pink-500/60 hover:border-pink-500/60 cursor-pointer'>Editar</button>
            </div>
        </div>
    </>
  )
}

export default EditarEquipo