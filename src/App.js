import './App.css';
import  { Toaster } from 'react-hot-toast';
import Layout from './component/Layout/Layout.jsx';
import Navbar from './component/Navbar/Navbar.jsx';
import {createBrowserRouter, createHashRouter, RouterProvider  } from "react-router-dom"
import UserTokenProvider from './Context/UserToken.js';
import Products from './component/Products/Products.jsx';
import About from './component/About/About.jsx';
import Home from './component/Home/Home.jsx';
import Signup from './component/Signup/Signup.jsx';
import Signin from './component/Signin/Signin.jsx';
import Brands from './component/Brands/Brands.jsx';
import BrandDetails from './component/BrandDetails/BrandDetails.jsx';
import ProductDetails from './component/ProductDetails/ProductDetails.jsx';
import Notfound from './component/Notfound/Notfound.jsx';
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute.jsx';
import Cart from './component/Cart/Cart.jsx';
import CartContextProvider from './Context/CartContext.js';
import Filter from './component/Filteration/Filter.jsx';
import Srevices from './component/Services/Srevices.jsx';
import AccountDetials from './component/AccountDetails/AccountDetials.jsx';


function App() {
  let routers =  createHashRouter([
    {path:'/' , element:<Layout/> , children:[
      {index:true , element:<Home/>},
      {path:'/brands' , element:<Brands/> },
      {path:'/products' , element:<Products/> },
      {path:'/productDetails/:slug' , element: <ProductDetails/> },
      {path:'/brandDetails/:slug' , element:<BrandDetails/> },
      {path:'/about' , element:<About/> },
      {path:'/login', element:<Signin/>},
      {path:'/register', element:<Signup/>},
      {path:'/cart' , element:<Cart/>},
     {path:"/filter" , element:<Filter/>},
     {path:"/services" , element:<Srevices/>},
     {path:"/account" , element:<AccountDetials/>},
    
      {path:'*', element:<Notfound/>},
      
    ]}
  ])

  return<>
 <CartContextProvider>
 <UserTokenProvider>
     <RouterProvider router={routers}></RouterProvider>
     <Toaster/>
     </UserTokenProvider>
 </CartContextProvider>
  </>
}

export default App;
