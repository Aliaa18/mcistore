import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Loadingscreen from '../Loadingscreen/Loadingscreen'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import toast from 'react-hot-toast'
import axios from 'axios'
export default function Cart() {
    const [details, setDetails] = useState(null)
 const [Loading, setLoding] = useState(true)
 let {  checkout ,getUserCart, removeCartItems ,updateCartItems,removeCart, addToCart ,numOfCartItems ,setNumOfCartItems }=  useContext(CartContext)
 async function getCart(){
    let {data} = await getUserCart()
    console.log(data?.status);
    if(data?.status==='success'){
    setDetails(data);
    setLoding(false)
    setNumOfCartItems(data.cart.products.length)
    //console.log(data.cart.products.length);
   
   // console.log(data.cart.products.length);
    localStorage.setItem('UserId' , data.cart.user_id)
  }else{
   // console.log(data?.products);
    setLoding(false)
  }
 
}
async function postCart(productId){
    let {data} = await  addToCart(productId)
    if (data){
      // setNumOfCartItems(data.numOfCartItems)
    }
 }
 async function deleteCart(){
    let {data} =await removeCart()
    if(data?.message=="Cart has been cleared successfully."){
      setDetails(null);
      setNumOfCartItems(0)
    }
   }

   async function removeItems(id){
    let {data} = await removeCartItems(id)
    if(data?.status ==='Removed successfully'){
      setDetails(data)
     // console.log(data);
     // setNumOfCartItems(data.numOfCartItems)
     
     
    }
   }
   async function updateCart(count , id){
    let {data}= await updateCartItems(count , id)
   // console.log(data);
    
    if(data?.message ==='Cart updated successfully.'){
      setDetails(data)
    }
   }

   async function checkOut(){
    let {data} = await checkout()
    console.log(data);
    deleteCart()
    toast.success( data.message , {
      duration: 3000,
   })
   }
useEffect(()=>{
     getCart()
} , [])

  return <>
  <Helmet>
    <title>Your Cart</title>
  </Helmet>
   {Loading?<>
   <Loadingscreen/>
   </>:<>
    <div className="container">
   <div className="bg-main-light mt-5 p-4">
    {details?.cart.products.length>0?  
      <div >
        <h2 className="h5">Shop Cart :</h2>
        <h3 className="h6  text-main fw-bold">Cart Items : {details.cart.products.length}</h3>
        <h3 className="h6 text-main fw-bold">Total Cart Price : {details.cart.total_price} EGP </h3>
             {details?.cart.products.map((pro)=>(
              <div className="row border-bottom mt-3 mb-3" key={pro.product_id?._id}>
                <div className="col-md-1">
                  <div>
                  <img src={pro.product_id?.cover_image.path} className="w-100" alt="" />
                </div>
                </div>
                <div className="col-md-11">
                  <div className="d-flex w-100 justify-content-between align-items-center">
                        <div>
                         <h4 className="h6">{pro.product_id?.title.split(" ").slice(0,4).join(" ")}</h4>
                          <h6 className="text-main">Price : {pro.product_id?.price}</h6>
    <button onClick={()=>{removeItems(pro.product_id._id)}} className="btn p-0 "><i className="fas fa-trash-can text-main"></i> Remove</button>
                         </div>
                         <div>
                             <div>
          <button onClick={()=>{updateCart(1,pro.product_id._id)}} className="btn main-border p-1 px-2 me-2">+</button>
                              <span>{pro.quantity}</span>
                              <button onClick={()=>{updateCart(-1,pro.product_id._id)}}  className="btn main-border p-1 px-2 ms-2">-</button>
                              </div>
                         </div>
                         </div>
                  </div></div>
              
            ))}   

            <div className="d-flex  justify-content-around align-items-center">
     <Link ><button onClick={()=>{checkOut()}} className="btn bg-main text-white"> Checkout</button></Link>  

        <button onClick={()=>{deleteCart()}} className="btn bg-main text-white"><i className="fas fa-trash-can text-white"></i> Remove Cart</button>      
        </div>
         </div>
           :  
           <div className="bg-main-light text-center p-4">
           <h2 >Cart is empty</h2>
               </div>
               }
               </div>
   </div>
   </>}
  </>
}
