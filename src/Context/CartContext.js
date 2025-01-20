import axios from "axios";
import { createContext, useState ,useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import toast  from 'react-hot-toast';
export let CartContext= createContext();

 let userToken =localStorage.getItem('userToken')
 let userId = localStorage.getItem('userId')
 let headers = {
    token : "Bearer "+userToken
 }
 
 export default function CartContextProvider(props){
  const [numOfCartItems, setNumOfCartItems] = useState(0)
  const [owner , setCartOwner] = useState(null)
   
  // async function getCartItems(){
  //   let {data}= await getUserCart();
  //     if(data?.status==='success'){
  //   setNumOfCartItems(data.numOfCartItems)
  //    setCartOwner(data.data.cartOwner)
  //    localStorage.setItem('UserId' , owner)
  //     }
  //  }
   
  //  useEffect(() => {
  //    getCartItems()
  //  }, [])
   
        function removeCart(){
          return axios.delete(`https://mcishop.vercel.app/api/v1/cart/clear` , {
            headers
          })
          .then((res)=>res)
    .catch((err)=>err)
        }

   function addToCart(productId){
    return  axios.put(`https://mcishop.vercel.app/api/v1/cart/add` , {
        product_id:productId
    } , {
        headers
    })
    .then((res)=>res)
    .catch((err)=>err)
  }
  function getUserCart(){
    return axios.get(`https://mcishop.vercel.app/api/v1/cart` , {
      headers
    })
    .then((res)=>res)
    .catch((err)=>err)
  }
  function checkout(){
    return axios.get(`https://mcishop.vercel.app/api/v1/cart/checkout` , {
      headers
    })
    .then((res)=>res)
    .catch((err)=>err)
  }

  function updateCartItems(count , product_id){
    return axios.put(`https://mcishop.vercel.app/api/v1/cart/update` , {
        count,
      product_id
    },{
      headers
    })
  }

  function removeCartItems(id){
    return axios.put(`https://mcishop.vercel.app/api/v1/cart/remove/` ,{
      product_id:id
    },{
      headers
    })
    .then((res)=>res)
    .catch((err)=>err)
  }

  // function onlinePayment(cartId , shippingAddress){
  //   return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://mcishop.vercel.app` , 
  //    { shippingAddress
  // },{
  //     headers
  //   })
  // }
  //  function getAllOrders(){
  //   return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
  //   .then((res)=>res)
  //   .catch((err)=>err)
  //  }

    return <>
    <CartContext.Provider value={{ checkout ,removeCartItems, owner,updateCartItems,removeCart,addToCart , setCartOwner , numOfCartItems,setNumOfCartItems  , getUserCart }}>
      {props.children} 
    </CartContext.Provider>
 </>
 }

