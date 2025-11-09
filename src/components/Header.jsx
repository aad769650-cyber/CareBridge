
import { CircleChevronUp, Menu, X } from 'lucide-react'
import React, { useState } from 'react'

import { Provider } from './Provider';
import { HealthAccess } from './HealthAccess';

export const Header = () => {
  const [menu,setMenu]=useState(true);

  const [service,setService]=useState(false)

  const scrollToHealth=()=>{
    const health=document.getElementById("Health");
     if (health) {
      health.scrollIntoView({ behavior: 'smooth' });
    }

  }
   const scrollToSection2 = () => {
    const section = document.getElementById('provider');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };



  const services=[
    {
          title:"Primary Care",
    ser1:"Annual Check-ups",
    ser2:"Preventive Care",
    ser3:"Vaccinations",
    ser4:"Chronic Disease Management",
    },
 










  {
          title:"Specialty Services  ",
    ser1:"Cardiology",
    ser2:"Dermatology",
    ser3:"Endocrinology",
    ser4:"Gastroenterology",
    },
        {
          title:"Mental Health",
    ser1:"Counseling",
    ser2:"Depression Treatment",
    ser3:"Anxiety Management",
    ser4:"Behavioral Health",
    },
        {
          title:"Testing & Diagnostics",
    ser1:"EKG",
    ser2:"Lab Services",
    ser3:"X-Ray & Imaging",
    ser4:"Allergy Testing",
    },
  ]

  const handleMouseEnter=()=>{
    console.log("added");

    setService(true)
  }

  

  const handleHealthClick=()=>{
    setMenu(!menu)
    scrollToHealth()
  }
  const handleMouseLeave=()=>{
    console.log("Leaved");

    setService(false)
  }

console.log(menu);

  return (
<>
    <header className="sticky top-0 z-10 bg-emerald-400 h-24 px-4 flex items-center justify-between  lg:justify-evenly ">
<div className="flex  items-center  ">
    <img className="w-6 h-17 " src="logo.webp" alt="Logo" />
    <div className="m-2 font-bold text-2xl">CareBridge </div>

</div>
<div className='hidden lg:flex justify-center items-center p-2 gap-8 font-semibold text-gray-700 text-lg transition-all'>

    <div className='transition-all duration-300 hover:text-white cursor-pointer'>Home</div>
    <div  className='transition-all duration-300 hover:text-white cursor-pointer' onClick={scrollToSection2}>Provider</div>
    <div  className='transition-all duration-300 hover:text-white cursor-pointer'  onMouseEnter={handleMouseEnter}>Healthcare  Services</div>
    <div  className='transition-all duration-300 hover:text-white cursor-pointer' onClick={scrollToHealth}>Health Access</div>
</div>
<div className='hidden lg:flex justify-center items-center gap-4 font-semibold '>
    <div className='transition-all duration-300 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-3.5 py-2  rounded-lg'>Pay</div>
    <div className='transition-all duration-300 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-3.5 py-2  rounded-lg'>New Patient Packet</div>
    <div className='transition-all duration-300 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-3.5 py-2  rounded-lg'>Request Appointment</div>
  
</div>
<div className='lg:hidden' onClick={()=>setMenu(!menu)}>
  {
menu?<Menu />:<X/> 
  }

</div>


    </header>



  <section className={`bg-slate-800 ${menu?"":"p-4"  } fixed top-24 w-full z-50`}>

    <div>
      <div className= {`${menu?"hidden":"flex"} flex-col justify-between items-start p-2 gap-6 font-semibold text-gray-700 text-lg ` }>

    <div className=' text-white cursor-pointer' onClick={()=>setMenu(!menu)}>Home</div>
    <div  className=' text-white cursor-pointer' onClick={()=>{
       scrollToSection2()
      setMenu(!menu)}}
      
      >Provider</div>
    <div  className=' text-white cursor-pointer' onClick={()=>setMenu(!menu)}>Health Services</div>
    <div  className=' text-white cursor-pointer'onClick={handleHealthClick}>Health Access</div>
</div>
<div className={`${menu?"hidden":"flex"} flex justify-center flex-col items-start gap-4 font-semibold `}>
    <div className='w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-3.5 py-2  rounded-lg'>Pay</div>
    <div className='w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-3.5 py-2  rounded-lg'>New Patient Packet</div>
    <div className='w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-3.5 py-2  rounded-lg'>Request Appointment</div>
    <div className='w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-3.5 py-2  rounded-lg'>Upload ID Card</div>
  
</div>
    </div>
  </section>

  <div className={`${service?"flex":"hidden"}  gap-4 bg-emerald-400  w-[750px] rounded p-4 items-center justify-center fixed top-24 z-30 left-50`} onMouseLeave={handleMouseLeave}>

{
  services.map((curr)=>{
    const {title,ser1,ser2,ser3,ser4}=curr;

    return(
      <>
      
      <div className='flex gap-2 flex-col'>
        <div className='font-semibold text-emerald-700 '>{title}</div>
        <hr className='text-white'/>
        <p className=' text-gray-800 hover:text-purple-500 cursor-pointer '>{ser1}</p>
        <p className='text-gray-800 hover:text-purple-500 cursor-pointer '>{ser2}</p>
        <p className='text-gray-800 hover:text-purple-500 cursor-pointer '>{ser3}</p>
        <p className='text-gray-800 hover:text-purple-500 cursor-pointer '>{ser4}</p>
      </div>
      </>
    )
  })
}


  </div>
  </>
  )
}

