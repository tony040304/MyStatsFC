import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router'

const MiEquipo = () => {
  const navigate = useNavigate();

    const verJugadores = () => {
      navigate('/verJugadores');
    }

  return (
    <div className="min-h-screen flex flex-col"> 
        <Navbar />
        <div className='m-auto flex flex-col justify-center items-center'>
            <div className="grid grid-cols-5 grid-rows-5 gap-4">
              <div className="col-span-3 row-span-2 max-w-150 flex flex-col items-center border-2 rounded-2xl bg-gray-700/60 text-amber-50 hover:text-pink-500/60 hover:border-pink-500/60 cursor-pointer" onClick={verJugadores}>
                <h1 className='text-3xl mb-2'>Jugadores</h1>
                <img src="/equipoAbrazado.webp" className='jugador rounded-lg w-90 h-50' alt="equipoAbrazado" />
              </div>

              <div className="col-span-2 row-span-4 col-start-4 border-2 p-2 rounded-2xl flex flex-col items-center align-middle w-64 bg-gray-700/60 text-amber-50 hover:text-pink-500/60 hover:border-pink-500/60 cursor-pointer">
                <h1 className='text-3xl'>Partidos</h1>
                <img src="/PartidoDesdeArriba.webp" className='jugador rounded-lg h-100 mt-4' alt="" />
              </div>

              <div className="col-span-2 row-span-2 row-start-3 flex flex-col items-center max-w-100 border-2 rounded-2xl bg-gray-700/60 text-amber-50 hover:text-pink-500/60 hover:border-pink-500/60 cursor-pointer">
                <h1 className='text-3xl'>Nuevo fichaje</h1>
                <img src="/Fichaje.webp" className='jugador rounded-lg w-64 h-45 m-2' alt="" />
              </div>

              <div className="row-span-2 col-start-3 row-start-3 border-2 rounded-2xl flex flex-col items-center max-w-46 bg-gray-700/60 text-amber-50 hover:text-pink-500/60 hover:border-pink-500/60 cursor-pointer">
                <h1 className='text-2xl mb-4'>Editar equipo</h1>
                <img src="/pizarra.jpeg" className='jugador2 rounded-lg rotate-90 mt-6' alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default MiEquipo