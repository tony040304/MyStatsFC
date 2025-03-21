import React, { use, useState } from 'react'
import { useNavigate } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import JugadorAni from '../Animaciones/JugadorAni'

const Navbar = () => {
const [jugadores, setJugadores] = useState(false)
const navigate = useNavigate()

    const handleClick = () => {
        setJugadores(!jugadores)
    }
    const navInicio = () => {
        navigate('/')
    }
    const navEquipo = () => {
        navigate('/equipo')
    }
    const navPartidos = () => {
        navigate('/partidos')
    }
    



  return (
    <nav className='fixed top-0 w-full z-10'>
        <div className='flex flex-row justify-between bg-gray-900 p-4'>
            <h1 className='text-slate-200 text-xl'>My Stats FC</h1>
            <ul className='flex flex-row'>
            <li className='text-slate-200 text-lg mx-2 hover:bg-pink-500/60 w-14 flex justify-center rounded-md cursor-pointer' onClick={navInicio}>Inicio</li>
            <li className='text-slate-200 text-lg mx-2 hover:bg-pink-500/60 w-18 flex justify-center rounded-md cursor-pointer' onClick={handleClick}>Jugador</li>
            <li className='text-slate-200 text-lg mx-2 hover:bg-pink-500/60 w-18 flex justify-center rounded-md cursor-pointer' onClick={navEquipo}>Equipos</li>
            <li className='text-slate-200 text-lg mx-2 hover:bg-pink-500/60 w-18 flex justify-center rounded-md cursor-pointer' onClick={navPartidos}>Partidos</li>
            </ul>
        </div>
        <AnimatePresence>
                { jugadores && (
                    <JugadorAni handleClick={handleClick}/>
                )}
            </AnimatePresence>
    </nav>
  )
}

export default Navbar