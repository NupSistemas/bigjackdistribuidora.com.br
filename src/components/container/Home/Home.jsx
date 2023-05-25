import React from 'react'
import portfolio from "../../../assets/logo.png"
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className='name'>Bem-Vindo(a) <span>Big Jack Distribuidora</span> </h3>
        <span className='job'>1ª melhor do estado de Santa Cataria e a 3ª Melhor do Brasil.</span>
        
        <motion.a
          href="https://api.whatsapp.com/send?phone=554896106015" target='_blank'
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          Contate-Nós</motion.a>
    
      </div>
    </motion.div>
  )
}

export default Home