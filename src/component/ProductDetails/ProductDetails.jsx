import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import toast  from 'react-hot-toast';
import { CartContext } from '../../Context/CartContext'
import { Helmet } from 'react-helmet'
import Loadingscreen from '../Loadingscreen/Loadingscreen'
import img2 from '../../Assets/icon-removebg-preview_enhanced.png'
export default function ProductDetails() {
    let [product , setProduct] = useState(null)
    let [loading , setLoading] = useState(true)
    let {addToCart ,setNumOfCartItems} = useContext(CartContext)
    let {slug}=useParams()
   async  function getProductDetails(){
      const {data} = await axios.get(`https://mcishop.vercel.app/api/v1/products/${slug}`)
       console.log(data);
       setProduct(data)
       setLoading(false)
    }
    async function postCart(productId){
      let {data} = await  addToCart(productId)
      if (data?.status=="Added successfully"){
       toast.success('added successfully to your cart' , {
          duration: 3000,
       })
    
      
       setNumOfCartItems(data?.cart.products.length )
      }
   }
    
     useEffect(()=>{
         getProductDetails()
     },[]) 
  return <>
        <Helmet>
          <title>{`${product?.product.title}`} </title>
          <link rel="icon" href="" />
        </Helmet>
    {loading?<>
    <Loadingscreen/>
    </>:<>
      <div className="container">
    <div className="row py-5 my-5">
   <div className="col-md-3 position-relative">
     <img loading='lazy' src={product?.product.cover_image.path} alt={product?.product.description} className='w-100' />
     <div className='w-50 layer-details'>
          <img src={img2} alt=""  className='w-100'/>
        </div>
      </div>
     <div className=" col-md-9 d-flex justify-content-center align-items-center">
           <div>
            <h2 className="h4 fw-bold">{product?.product.title}</h2>
            <p className="text-muted">{product?.product.description}</p>
            <h3 className="h4 fw-bold text-main">{product?.product.brand_id?.name}</h3>
            <div className="d-flex justify-content-between ">
          <span>{product?.product.price} EGP</span>
         </div>
         <button onClick={()=>{postCart(product.product.id)}} className="btn bg-main w-100 text-white mt-3">Add TO Cart</button>
           </div>
     </div>
          </div>
          {product?.product.features?<>
                  <div className="row py-5">
                    <div className='separator'>
                      <div className='desc p-2 text-center '>
                         <p className='h6 fw-bold'>Description</p>
                      </div>
                      
                    </div>
                    <div className='features py-4 h5'>
                    <p>{product?.product.features}.</p>
                      <div>

                      </div>
                    </div>
                  </div>
          </>:<></>}
    </div>
    </>}
  </>
}
