import React from 'react'
import { Helmet } from 'react-helmet'

export default function Srevices() {
  return <>
  <Helmet>
    <title>Mci-Services</title>
  </Helmet>
    <section id='services'>
    <div class="container pt-5 pb-5">
                <div class="title" data-aos="fade-up" data-aos-duration="3000">
                    <div class="main-title mb-5">
                        <h2 class="back m-auto">OUR SERVICES</h2>
                            <h3 class="m-auto">OUR SERVICES</h3>
                    </div>
<p class="m-auto pt-5">MCI provides Technical Services to the industry projects including Oil & Gas, Petrochemical, Manufacturing and Utilities in Egypt and worldwide. Support service includes design, engineering and implementation of our solutions.</p>
<p class="m-auto mt-4"><strong>We have the proficiency and resources to support the following services:</strong>
</p>            
                   </div>
                   {/* <!-- <div class="row gap-5">
                    <div class="col-md-4 vh-100 bg-black">

                    </div>
                    <div class="col-md-4 vh-100 bg-danger">

                    </div>
                    <div class="col-md-4 vh-100 bg-primary">

                    </div>
                   </div> --> */}
           <div class="row gap-3 g-3 mt-5" >
            <div class="col-md-3  item" >
                <div class=" py-4 px-2">
                    <h4 class="text-center mb-3">Engineering</h4>
                <ul>
                 <li> DCS & PLC’s control systems.</li>
                 <li> Supervisory control and data acquisition systems SCADA.</li>
                  <li>Instrument detailed design.</li>
                  <li>                     Power Monitoring and Interface Systems.
                </li>
                    <li>Power quality</li>
                </ul>
                </div>
            </div>
            <div class="col-md-4   item " >
              <div class="py-4 px-2">
               <h4 class="text-center mb-3">Field Services</h4>
               <ul>
                <li> E&I Construction works.</li>
                <li> Installation Supervision and Site Management.</li>
                 <li>Instrument installation and field calibration.</li>
                 <li>      Pre-Commissioning and Commissioning Activities.
               </li>
                   <li> Electrical and turbo machinery commissioning assistance.</li>
               <li>Oil, Gas and Petrochemical process assistance.</li>
               <li>Maintenance assistance.</li>
               <li>Power measurement and calibration.</li>
               </ul>
              </div>
           </div>
          
            
            <div class="col-md-4   item " >
                <div class="py-4 px-2">
                    <h4 class="text-center mb-3">Material Supply</h4>
                <ul>
                 <li> Control systems.</li>
                 <li> Field Instruments.</li>
                  <li>Instrument detailed design.</li>
                  <li>   est & Calibration Equipment.
                </li>
                    
                </ul>
                </div>
            </div>
            <div class="col-md-4   item " >
                <div class="py-4 px-2">
                    <h4 class="text-center mb-3">Training Services</h4>
                <ul>
                 <li> PLC & SCADA & Instrumentation courses</li>
                 
                </ul>
                </div>
            </div> 
    
     </div> 
             </div>
    </section>
             </>
}
