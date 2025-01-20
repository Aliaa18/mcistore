import React from 'react'
import Mainslider from '../Mainslider/Mainslider'
import Brands from '../Brands/Brands'
import Products from '../Products/Products'
import { Helmet } from 'react-helmet'
import WhatsappIcon from '../WhatsappIcon/WhatsappIcon'

export default function Home() {
  return <>
  <Helmet>
    <title>MCI</title>
  </Helmet>
  <Mainslider/>
  <h1 className='text-center my-5'>Featured Products</h1>
  <Products />
  <h1 className='text-center my-5'>Brands</h1>
  <Brands/>
  
  </>
}
