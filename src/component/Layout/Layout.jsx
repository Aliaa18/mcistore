import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { UserToken } from '../../Context/UserToken'
import Loadingscreen from '../Loadingscreen/Loadingscreen'
import WhatsappIcon from '../WhatsappIcon/WhatsappIcon'


export default function Layout() {
  let{setUserToken} = useContext(UserToken)
 useEffect(()=>{
    if(localStorage.getItem('userToken')){
      setUserToken(localStorage.getItem('userToken'))
    }
  },[])

  
  return <>
  <Navbar/>
  <Outlet></Outlet>
  <Footer/>
  <WhatsappIcon/>
  </>
}
