import React from 'react'

export const HealthAccess = () => {
  return (
<>
        <div id='Health' className='flex justify-center items-center  '>
    <div className=" text-center w-32 h-1 border-b-4 border-emerald-400 mt-8 rounded"></div>

</div>
<div  className='flex justify-center items-center flex-col mb-4 p-4'>
    <div className='font-bold text-3xl'>Health <span className='text-emerald-400'>Access</span> App</div>
</div>


  <section className='flex flex-wrap p-4 gap-4 md:gap-8'>




<div className='shadow-2xl md:w-[45%] p-4 flex flex-col gap-4 rounded'>

<div className='text-emerald-400 font-semibold'>Online health access on your smartphone</div>

<p className='text-gray-900'>
  Access your health record with the healow™ smartphone app. Along with the features you get with our Patient Portal, the healow app can manage multiple accounts (all family members), set medication and appointment reminders, and use trackers to help manage health.</p>

<div>
  <div className='text-gray-700 font-semibold mb-2'>healow is available free on the
    <span className='text-blue-500 hover:underline'>Apple App Store</span>and
     <span className='text-blue-500 hover:underline'>Google
     Play Store.</span></div>












 <div className=' flex gap-4'>


  <div className='flex flex-col gap-4'>
<div className='flex gap-2 items-center'> 
  
  
  </div>

  <div className='flex gap-2 items-center'> 
  
  
  </div>

  <div className='flex gap-2 items-center'> 
  
Access health records
  
  
  </div>

  </div>




 


 </div>



</div>
<div className='bg-emerald-200 p-8 rounded'>
 
 <div className='text-emerald-400'>Download the healow smartphone app</div>



<div className='md:flex md:flex-wrap-reverse gap-1.5 my-4'>

  <img src="app_store_button.png" alt="AppStore btn"  className='cursor-pointer scale-105 transition-all duration-300 my-2'/>
  <img src="play_store_button.png" alt=" play store"  className='cursor-pointer hover:scale-105 transition-all duration-300'/>
</div>

 <p>To learn more about healow,<span className='text-blue-500 hover:underline'>click here</span></p>
</div>
</div>

<div className=' w-full md:w-1/2 p-4 '>


<img src="healow-image.jpg" alt="Portal image"  className='w-full md:w-[90%] object-cover cursor-pointer transition-all duration-300 hover:scale-105'/>

</div>

  </section>

</>
  )
}
