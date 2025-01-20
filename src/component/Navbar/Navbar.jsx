import React, { useContext , useState ,useEffect} from 'react'
import {Link, useNavigate} from 'react-router'
import { UserToken } from '../../Context/UserToken'
import {CartContext} from '../../Context/CartContext.js'
import brandlogo from '../../Assets/icon-removebg-preview_enhanced.png'
export default function Navbar() {
let navigate= useNavigate()
let {userToken , setUserToken} = useContext(UserToken)
let {numOfCartItems,setNumOfCartItems , getUserCart} = useContext(CartContext)
let [activeNavItem, setActiveNavItem] = useState('/'); // Default active item

let handleNavClick = (path) => {
  setActiveNavItem(path);
};
async function getCart(){
  let {data} = await getUserCart()
  if(data?.status=='success'){
    setNumOfCartItems(data.cart.products.length)
     
     
}else{
  console.log(data);
}

}
function logOut(){
  localStorage.removeItem('userToken');
  setUserToken(null);
  navigate('/login')
}
useEffect(() => {
  
getCart()
}, [])

  return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand d-flex flex-column align-items-start" to="#">
    <img src={brandlogo} alt="Mci-Shop" className="brand-logo" style={{ height: '40px', width: 'auto' ,  backgroundColor: 'inherit', paddingBottom:'6px' }} />
   
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
     
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              className={`nav-item me-2 ${activeNavItem === '/' ? 'active' : ''}`}
              onClick={() => handleNavClick('/')}
            >
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li
              className={`nav-item me-2 ${activeNavItem === '/products' ? 'active' : ''}`}
              onClick={() => handleNavClick('/products')}
            >
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li
              className={`nav-item me-2 ${activeNavItem === '/brands' ? 'active' : ''}`}
              onClick={() => handleNavClick('/brands')}
            >
              <Link className="nav-link" to="/brands">
                Brands
              </Link>
            </li>
            <li
              className={`nav-item me-2 ${activeNavItem === '/services' ? 'active' : ''}`}
              onClick={() => handleNavClick('/services')}
            >
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
          </ul>
      
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item d-flex align-items-center">  
         <Link className="nav-link text-main" to={'/cart'}> <i className="fas fa-shopping-cart cartIcon"><span className="cartNums">{numOfCartItems}</span></i> </Link>
     <Link to='https://www.facebook.com/share/1QxjrCuHUJ/'> <i className="fab fa-facebook mx-1 cursor-pointer text-main"></i></Link>
      <Link to='https://www.linkedin.com/company/mci-misr-for-control-and-instrumentation/'><i className="fab fa-linkedin mx-1 cursor-pointer text-main"></i></Link>
     <Link to='https://www.mci-egypt.com'> <i class="fa-solid fa-globe mx-1 cursor-pointer text-main"></i></Link>
        </li>
        {userToken?
        <li className="nav-item">
        <span onClick={()=>logOut()} className="nav-link fw-bold cursor-pointer">Sign out</span>
      </li>
        : <><li>
        <Link className="nav-link" to={'login'}>Login</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to={'register'}>Sign up</Link>
        </li> </>}
        </ul>
      
      
        
        
     
     
      
      

     
    </div>
  </div>
</nav>
  </>
}
