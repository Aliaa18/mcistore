import React, { useState } from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Signup() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    let navigate=useNavigate();

    async function register(values){
      setLoading(true)
          let {data} = await axios.post('https://mcishop.vercel.app/api/v1/auth/signup', values , {
            Content_Type:"application/json"
          }).catch((err)=>{
           // setError(err.response.data.message);
            setLoading(false)
            console.log("hello" , data);
          })
  
           if(data.message === "Signed up successfully"){
            setLoading(false)
            navigate('/login')
            console.log(data);
           }
           
    }
  
     let validationSchema = Yup.object({
     companyName:Yup.string().min(3,'The Minimum length is 3!').max(15,'The Maximum length is 15!').required('companyName is required!'),         
     email:Yup.string().email('invalid email!').required('Email is required!'),
     password:Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'password must start with upperCase and then any lowerCase or number from 6 ro 11 !').required('Password is required!'),
    
    }) 
    let formik= useFormik({
      initialValues:{
        companyName:'',
        email:'',
        password:'',
      
        
      },validationSchema, onSubmit:register
    })
    return <>
        <Helmet>
          <title>Register</title>
        </Helmet>
  
                       <div className="w-75 mx-auto p-4 ">
                                <h2 className="text-center">Ragister Now</h2>
          {error?<div className="alert alert-danger py-2">{error}</div>:"" }                                                 
          <form onSubmit={formik.handleSubmit}>
             <label htmlFor="name">companyName:</label>
    <input type="text" name="companyName" id="companyName" value={formik.values.companyName}  className="mb-2 form-control" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
   {formik.errors.companyName && formik.touched.companyName? <div className="alert alert-danger py-2">{formik.errors.companyName}</div>:"" }                           
  
    <label htmlFor="email" className="mt-2">Email:</label>
    <input type="email" name="email" id="email" value={formik.values.email}  className="mb-2 form-control" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    {formik.errors.email && formik.touched.email? <div className="alert alert-danger py-2">{formik.errors.email}</div>:"" }                           
  
                              <label className="mt-2" htmlFor="password">Password:</label>
    <input type="password" name="password" id="password" value={formik.values.password}  className="mb-2 form-control" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    {formik.errors.password && formik.touched.password? <div className="alert alert-danger py-2">{formik.errors.password}</div>:"" }                           
  
  
                             
  {loading==true?<button type="button" className="btn bg-main text-white">
                  <i className="fas fa-spinner fa-spin"></i>
                  </button> : <button disabled={!(formik.isValid&&formik.dirty)} type="submit" className="btn bg-main text-white">Submiut</button>}
                          
  
                                </form>
                       </div>
    </>
}
