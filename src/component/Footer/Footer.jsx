import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../Assets/icon-removebg-preview_enhanced.png'
export default function Footer() {
  return <>
        <div className='myback mt-3'>
            <div className="container ">
                <div className="content py-4 text-secondary  mx-auto">
                    <div className="row py-5 w-75 mx-auto">
                        <div className="col-md-4">
                           <div>
                           <img src={img1} alt="" className='w-75' /> 
                           <p className='ps-3 fw-bolder'>Store</p>
                           </div>
                        </div>
                        <div className="col-md-4  text-center">
                            
                            <p className='lh-lg'><i className="fa-solid fa-location-dot"></i> <strong> Address : </strong><span className=' fw-normal'> 11 Ain Galoot from Abbas <br ></br>Alakaad, Nasr City, Cairo. </span></p>
                            <p><i className="fa-solid fa-phone"></i> <strong> Phone :</strong><span className=' fw-normal'> +201103473882 </span></p>
                        <p className='cursorPointer'><span className='h2 me-3'>
                            <Link to="https://www.facebook.com/share/1QxjrCuHUJ/" className='text-secondary text-decoration-none'><i class="fa-brands fa-facebook"> </i></Link></span>
                            <span className='h2 me-3'>
                            <Link to="https://www.linkedin.com/company/mci-misr-for-control-and-instrumentation/" className='text-secondary text-decoration-none'><i class="fa-brands fa-linkedin"> </i></Link></span>
                            <span className='h2 me-3'>
                            <Link to="https://www.mci-egypt.com" className='text-secondary text-decoration-none'><i class="fa-solid fa-globe"> </i></Link></span>
                                       </p>
                        </div>
                       
            
                       <div className="col-md-4 text-center">
                        <h5 className='text-myColor mb-4 '>About store</h5>
                        <p className='cursorPointer'><Link className='text-secondary text-decoration-none' to={'/services'}>Services</Link></p>
                        <p className='cursorPointer'><Link className='text-secondary text-decoration-none' to={'/about'}>About us</Link></p>
                        <p className='cursorPointer'><Link to="mailto:sales@mci-egypt.com" className='text-secondary text-decoration-none'>For Any Question, contact us.</Link></p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
  </>
}
