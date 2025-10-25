import React from 'react'
import { Slider } from './Slider'
import { Map } from 'lucide'
import { MapSection } from './Map'

export const About = () => {
  return (
   <>
   <div className='flex justify-center items-center  '>
    <div className=" text-center w-32 h-1 border-b-4 border-emerald-400 m-8 rounded"></div>

</div>
   <section className="w-full   md:flex p-4 gap-4 ">
<div className=''>




<div>


<div className='flex flex-col gap-6   '>

    <h2 className=' font-bold text-black text-3xl'>Welcome to <span className='text-emerald-300'> Cary Physicians</span></h2>


<div className='flex flex-col gap-4'>
    <p>At <span className='font-bold'>Cary Physicians Primary Care PLLC</span>, we provide <span className='font-bold'>comprehensive primary care</span> for individuals and families in Cary, NC.</p>
   
   
    <p>Our experienced <span className='font-bold'>Doctors, nurses, and healthcare</span> professionals are committed to delivering personalized, high-quality <span className='font-bold'>medical care</span> to meet your health needs</p>
    
    
    <p>Whether you need <span className='font-bold'>routine check-ups, preventive care, chronic disease management, or urgent medical attention</span>, we are here to support you with compassionate, patient-focused healthcare.</p>
</div>


<div className="w-full h-full rounded shadow-sm flex flex-col gap-4 p-4">

    <div className='text-emerald-300 font-bold text-2xl'>Accreditation</div>
    <div>ABIM Board Certified</div>

    <div className='text-emerald-300 font-bold text-2xl'>Specialties   </div>
        <li className='list-disc ml-4'>Internal Medicine
</li>
        <li className='list-disc ml-4' >Primary Care</li>
 
</div>

<Slider></Slider>
</div>



</div>

</div>


<MapSection></MapSection>



   </section>
   </>
  )
}
