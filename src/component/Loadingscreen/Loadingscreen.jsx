import React from 'react'
import { useState  } from 'react';
export default function Loadingscreen() {
    let [color, setColor] = useState("#ffffff");
    let [loading, setLoading] = useState(true);
    const override  = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
  return <>
      <div className='w-100 vh-100  bg-light d-flex justify-content-center align-items-center'>
             <div className='loader'>
             </div>
      </div>
  </>
}
