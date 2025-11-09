import { Info } from 'lucide-react';
import React from 'react'

export const HeroSection = () => {

  const boxArr=[
    {
      title:"Patient Portal Login"
    },
    {
      title: "Request Appointment"
    },
    {
      title: "New Patient Packet"
    },
    {
title:"Upload Id Card "
    },
    {
title:"Upload Insurance Card"
    }
  ]
  return (
<>
<section className='bg-[url(/hero-bg.webp)]   h-screen w-full bg-cover bg-center   lg:bg-top  lg:bg-no-repeat contrast-100  relative '>


    <div className='flex  items-end flex-col  justify-center h-full md:w-lg   gap-8      absolute top-0 right-0 md:right-44 p-2   '>



      <h1 className='  text-right   text-4xl  lg:text-5xl text-yellow-300 font-bold' style={{textShadow:"white 1px 1px"}}>CareBridge  Primary Care,  PLLC</h1>


      <p className='text-right w-full h-auto font-semibold text-white '>Dedicated to providing comprehensive primary care services for individuals and families in our community.</p>


      <a href='tel:919 230 7439' className="flex justify-end  text-2xl underline text-white ">Call: <span className='hover:text-gray-100'>03281700284</span></a>

      <div className='flex flex-col md:flex-row  flex-wrap items-end justify-end gap-4'>

        {
          boxArr.map((curr)=>{
            const title=curr.title;
            return(
              <>
              <div className="transition-all duration-300 bg-blue-500  md:bg-blue-400 text-center rounded-lg px-4 py-2 w-full md:w-32 md:h-18  md:p-2 text-white font-semibold hover:bg-red-500 cursor-pointer">{title}</div> 
              </>
            )
          })
        }
   

    
      </div>
   
    </div>


   </section>

   <div className='bg-gray-300 text-black flex items-center p-4'>
    <Info  color="#ff0000"  className="w-16 h-16 md:w-8 md:h-8 mr-2"/>
    <p>Please use messages for non-urgent communications only. If this is an emergency, please call 911.</p>
   </div>
   </>
  )
}
