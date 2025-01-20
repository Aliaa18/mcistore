import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import Loadingscreen from '../Loadingscreen/Loadingscreen'
import img2 from '../../Assets/icon-removebg-preview_enhanced.png'
export default function BrandDetails() {
    let [brand , setBrand] = useState(null)
    let [loading , setLoading] = useState(true)
    let {slug} = useParams()
    let url ='https://mcishop.vercel.app/api/v1/brands'
    async function getBrandDetails() {
        const {data} = await axios.get(`${url}/${slug}`)
          console.log(slug);
          setBrand(data)
          setLoading(false)
        console.log(data);
       // console.log(brand);  
    }



    useEffect(()=>{
            getBrandDetails()
    } , [])
  return <>
  <Helmet>
    <title>{brand?.brand.name}</title>
    
  </Helmet>
 {loading?<>
 <Loadingscreen/>
 </>:<>
  <div className="container">
       <div className="row gap-5 g-3 mt-2">
        { brand?.brand.products.length>0?( 
          brand?.brand.products.map((pro)=>(
             <div key={pro._id} className="col-md-2">
             <div className="product p-2 position-relative">
        < Link to={`/productDetails/${pro.slug}`}>
      <img loading='lazy' src={pro.cover_image.path} className="w-100"  alt={pro.description} />
        <h5  className="text-center text-dark h5 mb-4">{pro.title}</h5>
        <div className="text-center text-main">
          <h6>{pro.brand_id?.name}</h6>
         <h6 className='text-center text-main '><span className='pe-1'>{pro.price}</span> EGP</h6>
        </div>
      </Link>
      <div className="d-flex align-items-center justify-content-center heart ">
         <button   className="btn bg-main w-75  text-white mt-1">Add TO Cart</button>
         </div>
         <div className='w-75 layer'>
          <img src={img2} alt=""  className='w-100'/>
        </div>
         </div>
             </div>
        ))) : <>
              <p className='h1 text center text-main'>No products found yet!</p>
          </>}
       </div>
       </div>
 </>}
  </>
}
