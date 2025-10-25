import { Check, CircleCheck } from 'lucide-react'
import React from 'react'

export const PatientPortal = () => {
  return (
  <>
       <div className='flex justify-center items-center  '>
    <div className=" text-center w-32 h-1 border-b-4 border-emerald-400 mt-8 rounded"></div>

</div>
<div  className='flex justify-center items-center flex-col mb-4 p-4'>
    <div className='font-bold text-3xl'>Patient <span className='text-emerald-400'>Portal</span></div>
</div>
  
  

  <section className='flex flex-wrap p-4 gap-4'>

<div className=' w-full md:w-1/2 p-4'>


<img src="portal.png" alt="Portal image"  className='w-full md:w-[100%] object-cover cursor-pointer transition-all duration-300 hover:scale-105'/>

</div>



<div className='shadow-2xl md:w-[45%] p-4 flex flex-col gap-4 rounded'>

<div className='text-emerald-400 font-semibold'>Our Patient Portal gives you secure online access to your health information</div>

<p className='text-gray-900'>Patient Portal is a secure, convenient, and easy-to-use website that gives you round-the-clock access to your health information. View labs, medications, and immunization records. Get reminders. Exchange messages with your doctor. Stay informed and take charge of your health!</p>

<div>
  <div className='text-emerald-400 font-semibold mb-2'>Here's what you can do with our portal</div>












 <div className=' flex gap-4'>


  <div className='flex flex-col gap-4'>
<div className='flex gap-2 items-center '> 
  <Check size={16} color="#fff" className='bg-emerald-400 rounded-full flex-shrink-0'/>View lab results
  
  
  </div>

  <div className='flex gap-2 items-center '> 
  <Check size={16} color="#fff" className='bg-emerald-400 rounded-full flex-shrink-0'/>Send & receive messages securely
  
  
  </div>

  <div className='flex gap-2 items-center '> 
  <Check size={16} color="#fff" className='bg-emerald-400 rounded-full flex-shrink-0'/>

Access health records
  
  
  </div>

  </div>




  <div className='flex flex-col gap-4'>
<div className='flex gap-2 items-center '> 
  <Check size={16} color="#fff" className='bg-emerald-400 rounded-full flex-shrink-0
'/>Book appointments online
  
  
  </div>
  <div className='flex gap-2 items-center '> 
  <Check size={16} color="#fff" className='bg-emerald-400 rounded-full flex-shrink-0'/>Get statements and receipts online
  
  
  </div>
  <div className='flex gap-2 items-center '> 
  <Check size={16} color="#fff" className='bg-emerald-400 rounded-full flex-shrink-0'/>View doctors' notes
  
  
  </div>

  </div>



 </div>



</div>
<div className='bg-emerald-200 p-8 rounded'>
  <button className='cursor-pointer text-center transition-all duration-300 hover:scale-105 hover:bg-blue-500 bg-blue-400 w-full py-2 font-semibold text-white rounded my-2'>Patient Portal</button>

  <p className='text-gray-700 text-center'>Need help logging in? Call us at <span className='text-blue-600'>(919) 230-7439</span></p>
</div>
</div>

  </section>
  </>
  )
}
