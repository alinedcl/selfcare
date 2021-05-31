import React from 'react'  
import { Link } from 'react-router-dom'

import '../styles/Footer.css'
import { Button } from '../components/Button'

import instagramIcon from '../assets/instagram.svg'
import facebookIcon from '../assets/facebook.svg'
import mastercardIcon from '../assets/mastercard.svg'
import paypalIcon from '../assets/paypal.svg'
import visaIcon from '../assets/visa.svg'

const Footer = () => {
    return (
        <>
         <footer>
            <div className='footer-container1'>
            <div className='footer-container1-right'>
              <Link to='/' className='footer-links'>
                <p>Contato</p>
              </Link>
              <Link to='/' className='footer-links'>
                <p>Termos de serviço</p>
              </Link>
              <Link to='/' className='footer-links'>
                <p>Política de privacidade</p>
              </Link>
              <Link to='/' className='footer-links'>  
                <p>Cancelamento, troca e reembolso</p>
              </Link> 
              </div>
              <div className='footer-container1-left'>
                <p>Newsletter</p>
                <div className='input-button-container'>
                <input type='text' 
                className='email-input'
                aria-labelledby='emaillabel'
                name='email'
                placeholder='Digite seu melhor e-mail' />
                <span className='btn'>
                <Button buttonStyle='btn btn--green'>Inscrever</Button>
                </span>
                </div>
              </div> 
            </div> 
            
            <div className='footer-container2'>
             <div className='footer-container2-right'>
              <Link to='/'>
                <img src={instagramIcon} alt='instagram' />
              </Link>
              <Link to='/'>
                <img src={facebookIcon} alt='facebook' />
              </Link>
             </div>   
               <div className='footer-container2-left'>
                <img src={mastercardIcon} alt='mastercard' />
                <img src={paypalIcon} alt='paypal' />
                <img src={visaIcon} alt='visa' />    
               </div> 
            </div>
            </footer>    
        </>
    )
}

export default Footer 