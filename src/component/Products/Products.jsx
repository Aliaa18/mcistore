import axios from 'axios'
import React, { useEffect, useState , CSSProperties, useContext } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import { CartContext } from '../../Context/CartContext';
import SearchBar from '../SearchBar/Searchbar';
import Filter from '../Filteration/Filter';
import { Helmet } from 'react-helmet';
import img1 from '../../Assets/icon.png'
import img2 from '../../Assets/icon-removebg-preview_enhanced.png'
import Loadingscreen from '../Loadingscreen/Loadingscreen';
import { UserToken } from '../../Context/UserToken';


export default function Products({test}) {
  let navigate= useNavigate()
  let [products , setProducts] = useState(null)
  let [brands , setBrands] = useState(null)
  const [sortOrder, setSortOrder] = useState("");
  let [color , setColor] = useState('#ffffff')
  let [loading , setLoading] = useState(true)
  let {addToCart , setNumOfCartItems} = useContext(CartContext)
   let{setUserToken} = useContext(UserToken)
  let[hig , setHig] = useState("none")
         function high(){
          if (hig==="none") {
            setHig("flex")
          }else{
            setHig("none")
          }
         }
        

  async function getProducts(keyword){
    const {data} = await axios.get('https://mcishop.vercel.app/api/v1/products' , {
      params: { keyword , sort: sortOrder },
    })
        console.log(data);
        setProducts(data)
        setLoading(false)
        console.log(data.products);
        console.log(products);
        console.log(img1);
        
        
   }
   const handleSort = (order) => {
    setSortOrder(order); 
    setHig('none')
   // console.log(sortOrder);
  
  };
 

 async function handlePost(productId) {
           if(localStorage.getItem('userToken')){
            let {data} = await  addToCart(productId)
        if (data?.status=="Added successfully"){
     toast.success('added successfully to your cart' , {
        duration: 3000,
     })
    
     setNumOfCartItems(data?.cart.products.length )
    }
            //  postCart(productId)
          }else{
            navigate('/login')
          }
        
 }
 
  
    
    async function getBrands(){
      const {data} = await axios.get('https://mcishop.vercel.app/api/v1/brands')
          console.log(data);
          setBrands(data)
          console.log(brands);
          
     }

 
  useEffect(()=>{
     getBrands()
  }, [])
  useEffect(()=>{
    getProducts()
 },  [  sortOrder ])

  return <>
       <Helmet>
         <title>Products-Mci</title>
       </Helmet>
       {loading?<>
           <Loadingscreen/>
       </> :
       <>
        <div className="container">       
       <div className='mx-auto my-5 w-50 d-flex justify-content-center align-content-center'>
       <SearchBar onSearch={getProducts}/>
       </div>
       
      <div className=" mx-auto w-50 my-3 py-5  pe-5">
              <div className='ms-auto w-100 '>
          <div className='row w-57 ms-auto cursorPointer d-flex  justify-content-between align-items-center'>
                <div className='col-md-6'>
               
                </div>
              <div className='col-md-4 d-flex align-items-center justify-content-between' >
                    <div onClick={()=>high()}><i className="fa-solid fa-sliders fa-lg " style={{color: "#000"}}></i> <span>Filters</span></div>
                    </div>
                   </div>
              </div>
              <div className='ms-4 spliter w-100  mt-3 '></div>
     
             <div className="row mt-4" style={{display:`${hig}` , transition:`all 1s`}}>
                 <div className="col-md-6 ">
                     <div className='text-center'>
                         <h5 className='mb-3 fw-bolder'>Sort by</h5>
                         <p 
                          style={{ cursor: "pointer", color: sortOrder === "price" ? "blue" : "black" }}
                         onClick={() => handleSort("price")}
                         >Price: low to high</p>
                         <p 
                          style={{ cursor: "pointer", color: sortOrder === "-price" ? "blue" : "black" }}
                         onClick={() => handleSort("-price")}
                         >Price: high to low</p>
                     </div>
                 </div>
                 <div className="col-md-5 ">
                     <div >
                         <h5 className='mb-4 fw-bolder text-center'>Filter by brand</h5>

                         <div className=''>
                              {brands?.brands.map((brand)=>(
                                <div key={brand._id} className="row mx-auto mb-3 justify-content-between ps-3">
                                          <div  className="col-md-6">
                                          <div className="">
                                     < Link to={`/brandDetails/${brand.slug}`}>
                                   <img loading='lazy' src={brand.logo.path} className="w-100"  alt={brand.name} />
                                   </Link>
                                      </div>
                                          </div>
                                          
                                        
                                          <div className="col-md-1">
                                          <div className="quan d-flex justify-content-center align-items-center">
                                     <span>{brand.products?.length}</span>
                                      </div>
                                          </div>
                                          
                                          </div>
                                     ))}
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      


       <div className="row gap-5 g-3 ">
        {products?.products.map((pro)=>(
             <div key={pro._id} className="col-md-2 mb-2 ">
             <div className="product p-2 position-relative">
        < Link className='text-decoration-none text-black' to={`/productDetails/${pro.slug}`}>
      <div className='prodCont py-3'><img loading='lazy' src={pro.cover_image.path} className="w-100"  alt={pro.description} />
      </div>
        <h5  className="text-center h5 mt-2 mb-3">{pro.title}</h5>
        <div className="text-center text-main">
          <h6 className=' fw-bolder '>{pro.brand_id?.name}</h6>
         <h6 className='text-center fw-bold '><span className='pe-1'>{pro.price}</span> EGP</h6>
        
        </div>
      </Link>
      <div className="d-flex align-items-center justify-content-center heart ">
         <button onClick={()=>{handlePost(pro.id)}}  className="btn bg-main w-75  text-white mt-1">Add TO Cart</button>
         </div>
         <div className='w-75 layer'>
          <img src={img2} alt=""  className='w-100'/>
        </div>
         </div>
             </div>
        )) }
       </div>
       </div>
       </>}
       
  </>
}
