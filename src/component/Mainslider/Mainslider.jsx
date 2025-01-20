import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../../Assets/slider/slider.webp'
import slide2 from '../../Assets/slider/slider1.webp'
import slide3 from '../../Assets/slider/slider2.jpg'
import slide4 from '../../Assets/slider/slider3.jpg'
import slide5 from '../../Assets/slider/slider4.webp'
import axios from 'axios'

export default function Mainslider() {
  let [products , setProducts] = useState(null)
    let [brands , setBrands] = useState(null)
    const [sortOrder, setSortOrder] = useState("");
    
    
    async function getBrands(){
      const {data} = await axios.get('https://mcishop.vercel.app/api/v1/brands')
          console.log(data);
          setBrands(data)
          
          
         // console.log(brands);
          
     }
  
   
  async function getProducts(keyword){
    const {data} = await axios.get('http://localhost:3000/api/v1/products' , {
      params: { keyword , sort: sortOrder },
    })
        console.log(data);
        setProducts(data)    
   }

  var settings = {
    dots: false,
    infinite: true,
    autoplaySpeed:2000,
     autoplay:true,
     arrows:false,
    slidesToShow: 4,
    slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            // className: "center",
            // centerMode: true,
            // infinite: true,
            //centerPadding: "60px",
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    
    
  }

  useEffect(() => {
       getBrands()
  }, [])

  
  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   autoplaySpeed:1000,
  //    autoplay:true,
  //    arrows:false,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // }

  return <>
   <div className="container">
   <div className="row gx-0 my-3 mx-auto">
    <div className="col-md-10 mx-auto">
    <Slider {...settings}>
           <div><img src={slide1} height={250} className="w-100" /></div>
          <div> <img src={slide4}  height={250} className="w-100"  /></div>

           <div><img src={slide3} height={250} className="w-100"/></div>
           <div><img src={slide2} height={250} className="w-100"/></div>
           <div><img src={slide5} height={250} className="w-100"/></div>
   
    </Slider>
    </div>
    </div>

   <div className=' mx-auto py-4'>
   <h3 className='text-center my-2'>Our Parteners</h3>
    <Slider {...settings}>
    {brands?.brands.map((brand)=>
      <div key={brand._id}>
       <img src={brand.logo.path} height={200} alt={brand.name} />
         
         </div>
       )}
   
    </Slider>
   </div>
   </div>
  </>
}
