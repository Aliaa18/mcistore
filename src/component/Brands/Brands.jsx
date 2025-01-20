import React, { useState  , useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Loadingscreen from '../Loadingscreen/Loadingscreen'
export default function Brands() {
    let [brands , setBrands] = useState(null)
    let [loading , setLoading] = useState(true)
    
    async function getBrands(){
      
      const {data} = await axios.get('https://mcishop.vercel.app/api/v1/brands')
          console.log(data);
          setBrands(data)
          setLoading(false)
          
         // console.log(brands);
          
     }
  
    useEffect(()=>{
       getBrands()
    }, [])
  return <>
  <Helmet>
    <title>Brand-Mci</title>
  </Helmet>
   {loading?<>
   <Loadingscreen/>
   </>:<>
    <div className="container">
       <div className="row gap-5 g-3 my-2">
        {brands?.brands.map((brand)=>(
             <div key={brand._id} className="col-md-2 py-5">
             <div className="product p-2">
        < Link className='text-black fw-bolder text-decoration-none' style={{fontFamily:'sans-serif'}} to={`/brandDetails/${brand.slug}`}>
      <img loading='lazy' src={brand.logo.path} className="w-100"  alt={brand.name} />
        {/* <div className='pt-3'><h5  className="text-center h5 mb-4">{brand.name}</h5></div> */}
      </Link>
         </div>
             </div>
        ))}
       </div>
       </div>
   </>}
  </>
}
