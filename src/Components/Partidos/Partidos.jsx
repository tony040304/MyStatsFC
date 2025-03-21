import React from 'react'
import Navbar from '../Navbar/Navbar'

const Partidos = () => {
  return (
      <>
      <Navbar />
        <div className="min-h-screen w-full flex flex-col items-center justify-center">
          <div className="grid grid-cols-5 grid-rows-5 gap-4">
            <div className="col-span-2 row-span-2 col-start-2 row-start-2 flex flex-col items-center border-2 rounded-2xl bg-gray-700/60 text-amber-50 hover:text-pink-500/60 hover:border-pink-500/60 cursor-pointer">
              <h1 className='text-3xl mb-4'>Ver partidos</h1>
              <img src="/verPartidos.jpg" className='jugador rounded-lg w-124 h-44 mb-4' alt="" />
            </div>
            <div className="col-span-2 row-span-2 col-start-2 row-start-4 flex flex-col items-center border-2 rounded-2xl bg-gray-700/60 text-amber-50 hover:text-pink-500/60 hover:border-pink-500/60 cursor-pointer">
              <h1 className='text-3xl mb-4'>Crear partido</h1>
              <img src="/creaPartido.jpg" className='jugador rounded-lg w-124 h-44 mb-4' alt="" />
            </div>
            <div className="row-span-4 col-start-4 row-start-2 p-2 flex flex-col items-center border-2 rounded-2xl bg-gray-700/60 text-amber-50 hover:text-pink-500/60 hover:border-pink-500/60 cursor-pointer">
              <h1 className='text-3xl mb-4'>Cargar resultado</h1>
              <img src="/cargarPartido.jpg"  className='jugador rounded-lg h-100 mb-4' alt="" />
            </div>
          </div>
        </div>
      </>

  )
}

export default Partidos