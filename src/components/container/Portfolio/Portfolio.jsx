import React, { useEffect, useState } from 'react';
import "./Portfolio.scss"
import { workNavs } from "../../../Data";
import { workImages } from '../../../Data';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "todos" });
  const [works,setWorks] = useState([])
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (tab.name === "todos") {
      setWorks(workImages)
    } else {
      const newWork = workImages.filter(workImage => {
        return workImage.category.toLowerCase() === tab.name;

      })
      setWorks(newWork)
    }
  }, [tab])
  
  const activeTab = (e,index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index)
  }

  return (
    <div className="container" id="produtos">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="title"
      
      >
            <span>O que vendemos?</span>
            <h1>Nossos Produtos</h1>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="buttons"
      >
        {workNavs.map((workNav ,index) => {
          return (
            <button
              onClick={(e) => activeTab(e, index)}
              className={`${active === index ? "active" : ""}`}
              key={index}>{workNav}</button>
          )
        })}
      </motion.div>
      <motion.div
        initial={{x: 0 ,opacity: 0}}
        whileInView={{ x: [-250,0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{opacity: 0, y: -50}}
        className="workImages"
      >
        {works.map((work) => {
          return (
            <div className="workImage"
             key={work.id}
            >
              <img src={work.img} alt="workImg" />
              <motion.div
                initial={{opacity: 0}}
                whileHover={{ opacity: [0, 1] }}
                transition={{duration: 0.3 , ease: "easeInOut"}}
                className='hoverLayer'
              >
                  
              </motion.div>
            </div>
          )
        })}
      </motion.div>
      
    </div>
  )
}

export default Portfolio