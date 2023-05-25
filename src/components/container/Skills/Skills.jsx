import React, { useState } from 'react'
import "./Skills.scss";
import { deliverys } from '../../../Data';
import { clientesFixos } from '../../../Data';
import { motion } from 'framer-motion';
const Skills = () => {
  const [active, setActive] = useState(1)
  return (
    <div className="container" id="serviços">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}  
        className="title"
      >
        <span>O que atendemos?</span>
        <h1>Serviços</h1>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="select"
      >
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}>Delivery's</button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >Clientes Fixos</button>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="experiencs"
      >
        {active === 1 && deliverys.map(deliverys => {
          return (
            <div className="experience" key={deliverys.id}>
              <span>{deliverys.year}</span>
              <div className="position">
                <h3>{deliverys.position}</h3>
                <p>{deliverys.company}</p>
              </div>
            </div>
          )
        })}
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="experiencs"
      >
        {active === 2 && clientesFixos.map(clientesFixos => {
          return (
            <div className="experience" key={clientesFixos.id}>
              <span>{clientesFixos.year}</span>
              <div className="position">
                <h3>{clientesFixos.position}</h3>
                <p>{clientesFixos.company}</p>
              </div>
            </div>
          )
        })}
        </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        
      >
       
      </motion.div>
    </div>
  )
}

export default Skills