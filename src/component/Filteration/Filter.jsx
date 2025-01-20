import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Filter() {
    let [products , setProducts] = useState(null)
    let [loading , setLoading] = useState(true)
    let[hig , setHig] = useState("none")
    
       function high(){
        if (hig==="none") {
          setHig("flex")
        }else{
          setHig("none")
        }
        
       }
    
  
    async function getProducts(keyword){
      const {data} = await axios.get('http://localhost:3000/api/v1/products' , {
        params: { keyword },
      })
          console.log(data);
          setProducts(data)
          console.log(data.products);
          console.log(products);
          
     }
  
   
  
    useEffect(()=>{
       getProducts()
    }, [])
  
  return <>
    <div className=" ms-auto w-75 my-3 py-5 me-5 pe-5">
         <div className='ms-auto w-100 '>
     <div className='row w-75 ms-auto cursorPointer d-flex  justify-content-between align-items-center'>
           <div className='col-md-6'>
          
           </div>
         <div className='col-md-4 d-flex align-items-center justify-content-between' >
         <div className=''>
          <i className="fa-solid fa-border-all fa-lg me-2 input-change" style={{color: "darkgrey"}}></i>
          <i className="fa-solid fa-table-cells fa-lg input-change" style={{color: "darkgrey"}}></i>
          </div>
               <div onClick={()=>high()}><i className="fa-solid fa-sliders fa-lg -auto" style={{color: "#000"}}></i> <span>Filters</span></div>
               </div>
              </div>
         </div>
         <div className='ms-auto spliter w-100  mt-3'></div>

        <div className="row mt-4" style={{display:`${hig}` , transition:`all 1s`}}>
            <div className="col-md-4">
                <div>
                    <h4>Sort by</h4>
                    <p>Price: low to high</p>
                    <p>Price: high to low</p>
                </div>
            </div>
            <div className="col-md-4">
                <div>
                    <h4>Price filter</h4>
                    <p> <Link to={'/products'}>All</Link></p>
                    <p>2000EGP - 4000EGP</p>
                    <p>2000EGP - 4000EGP</p>
                    <p>2000EGP - 4000EGP</p>
                    <p>2000EGP - 4000EGP</p>
                </div>
            </div>
            <div className="col-md-4">
                <div>
                    <h4>Filter by brand</h4>
                    <div className='row'>
                        <div className="col-md-4">
                            Brand Image
                        </div>
                        <div className="col-md-4">
                            Brand name
                        </div>
                        <div className="col-md-4">
                            Brand products Num
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
}
