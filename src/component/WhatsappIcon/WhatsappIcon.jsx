import React from 'react'
import icon from '../../Assets/WhatsApp.svg.webp'
import { Link } from 'react-router-dom'
export default function WhatsappIcon() {
  return <>
    <div className='whatsLayer'>
    <Link
    to="https://wa.me/+201103473882"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-link"
  >
    <img src={icon} alt="WhatsApp" className="w-100" />
  </Link>
      <div className='disc d-none'>
     <p>WhatsAPP us</p>
      </div>
    </div>
    
    
  </>
}
