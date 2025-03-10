import React, {useState} from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../Navbar/Navbar'
import Jugador from '../Jugador/Jugador'
import JugadorAni from '../Animaciones/JugadorAni'

const Inicio = () => {
    const [jugadores, setJugadores] = useState(false)

    const handleClick = () => {
        setJugadores(!jugadores)
    }

  return (
      <>
        <Navbar/>
            <div className="grid grid-cols-5 grid-rows-6 gap-8 m-auto h-auto">
                <div  onClick={handleClick}className="row-span-4 col-start-2 row-start-2  bg-gray-700/60 text-amber-50 rounded-lg ml-4 justify-center items-center flex flex-col border-2 hover:text-pink-500/60 hover:border-pink-500/60 cursor-pointer">
                <h1 className='mt-4 text-xl'>My Stats</h1>
                        <img src="/jugador.webp" alt="" className='jugador rounded-lg m-4 w-64'/>
                </div>
                <AnimatePresence>
                    { jugadores && (
                        <JugadorAni handleClick={handleClick}/>
                    )}
                </AnimatePresence>
                <div className="row-span-4 col-start-3 row-start-3 bg-gray-700/60 text-amber-50 rounded-lg justify-center items-center flex border-2 hover:text-pink-500/60 hover:border-pink-500/60 cursor-pointer">Mi equipo</div>
                <div className="row-span-4 col-start-4 row-start-2 mr-4 bg-gray-700/60 text-amber-50 rounded-lg justify-center items-center flex border-2 hover:text-pink-500/60 hover:border-pink-500/60 cursor-pointer">Mis partidos</div>
            </div>
    </>
    
  )
}

export default Inicio