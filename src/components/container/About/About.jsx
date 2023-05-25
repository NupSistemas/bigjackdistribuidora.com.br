import React from 'react'
import "./About.scss";

import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from "../../../assets/darlan.png"
const About = () => {


  return (
    <div className="container " id='sobre'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>Quem Somos?</span>
        <h1>Sobre</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <p>Big Jack Distribuidora surgiu em 2011 junto com Big Jack Cervejaria sendo uma parceira no ramo de delivery.</p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })}
          <motion.a href='#serviços'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Nossos Serviços
          </motion.a>
        </motion.div>

      </div>

    </div>
  )
}

export default About