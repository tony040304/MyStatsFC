import React, {useState} from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../Navbar/Navbar'
import Jugador from '../Jugador/Jugador'
import JugadorAni from '../Animaciones/JugadorAni'
import { useNavigate } from 'react-router'

const Inicio = () => {
    const [jugadores, setJugadores] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setJugadores(!jugadores);
    };

    const navEquipo = () => {
        navigate('/equipo')
    }

  return (
      <>
        <Navbar/>
            <div className="grid grid-cols-5 grid-rows-6 gap-8 m-auto h-auto">
                <div  onClick={handleClick}className="row-span-4 col-start-2 row-start-2  bg-gray-700/60 text-amber-50 rounded-lg ml-4 justify-center items-center flex flex-col border-2 hover:text-pink-500/60 hover:border-pink-500/60 cursor-pointer">
                <h1 className='mt-4 text-xl'>My Stats</h1>
                        <img src="/jugador.webp" alt="jugador" className='jugador rounded-lg m-4 w-64'/>
                </div>


                <div onClick={navEquipo} className="row-span-4 col-start-3 row-start-3 rounded-lg items-center flex flex-col border-2 h-110 bg-gray-700/60 text-amber-50 hover:text-pink-500/60 hover:border-pink-500/60 cursor-pointer">
                    <h1 className='mt-4 text-xl'>Mi equipo</h1>
                    <img className='jugador rounded-lg m-4 w-64 mt-12 relative' src="/MyStatsEscudo.png" alt="escudo" />
                </div>

                <div className="row-span-4 col-start-4 row-start-2 mr-4 bg-gray-700/60 text-amber-50 rounded-lg items-center flex flex-col border-2 h-110 hover:text-pink-500/60 hover:border-pink-500/60 cursor-pointer">
                    <h1 className='mt-4 text-xl'>Mis partidos</h1>
                    <img className='jugador rounded-lg m-4 w-64 mt-12' src="/partido.webp" alt="partido" />
                </div>
                    <AnimatePresence>
                        { jugadores && (
                            <JugadorAni handleClick={handleClick}/>
                        )}
                    </AnimatePresence>
            </div>
    </>
    
  )
}

export default Inicio