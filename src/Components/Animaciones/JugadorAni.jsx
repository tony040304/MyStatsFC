import React from 'react'
import { motion } from 'framer-motion'
import Jugador from '../Jugador/Jugador'

const JugadorAni = ({handleClick}) => {
  return (
            <motion.div key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleClick}
                        className='fixed bg-opacity-50 backdrop-blur-md w-screen h-screen'>
                <Jugador/>
            </motion.div>
  )
}

export default JugadorAni