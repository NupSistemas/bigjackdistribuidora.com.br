import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container" id="contato">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>entrar em contato</span>
            <h1>Contate-Nós</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Localizar</h3>
          <p className='contact_text'>Estamos localizados em Orleans-SC no Centro para melhor atende-lo. Siga-nos e não deixe de fazer seu delivery.</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <a href='https://goo.gl/maps/b14mHmyQkcVEZHD78?coh=178571&entry=tt' rel='noreferrer'>{ contact.infoText}</a>
              </div>
            )
          })}
          
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Entrar em contato</h3>
          <div className="row">
            <input type="text" placeholder='Nome' />
            <input type="text" placeholder='Sobre nome'/>
          </div>
          <div className="row">
            <input type="text" placeholder='Telefone' />
            <input type="email" placeholder='E-mail' />
          </div>
          <div className="row">
            <textarea placeholder='Mensagem'></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
          >
            <a href="#a">Enviar</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact