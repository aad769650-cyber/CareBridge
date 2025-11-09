import { CircleMinus, Languages, MessageSquareText, User } from 'lucide-react'
import React from 'react'

export const Provider = () => {
  return (
  <>
     <div className='flex justify-center items-center  '>
    <div className=" text-center w-32 h-1 border-b-4 border-emerald-400 m-8 rounded"></div>

</div>




<div id="provider" className='flex justify-center items-center flex-col mb-4 p-4'>
    <div className='font-bold text-3xl'>Meet Your Provider</div>
    <p className='text-gray-600'>Dedicated to providing compassionate, evidence-based care tailored to your unique health needs</p>
</div>
  



  <section className='w-full p-4  lg:flex gap-12 flex-wrap lg:flex-row  sm:flex sm:flex-col sm:items-center sm:justify-center'>

<div >
<div className='mx-w-1/2 sm:w-1/2 md:w-92  shadow hover:shadow-2xl rounded-2xl  mb-4'>
    <img src="heroImg.jpg" alt="Service Provider Image" className='w-full md:w-92 rounded-t-2xl '/>

    <div className='border-t-4 border-emerald-400 p-4'>
<div className='font-bold'>  Dr.Maryam, MD</div>

  <p className='text-emerald-500 my-2'>Board Certified Internal Medicine</p>


<div className='flex gap-2  items-center'>
    <CircleMinus size={16} color="#0de710" />
    <p className='my-2'>15+ Years Experience</p>
</div>
  <div className='flex gap-2  items-center'>
    <Languages size={16}  color="#0de710" />
    <p>Languages: English, Urdu, Hindi, Punjabi</p>
  </div>
    </div>
</div>

  </div>



<div className=' lg:w-3xl'>
 <div className='border-l-4 border-emerald-400 rounded-2xl shadow-2xl p-8 md:p-6 flex justify-evenly flex-col gap-4'>
<div className='flex items-center gap-2 text-2xl font-bold'>
    <MessageSquareText size={16} color="#0de711" />
    My Philosophy 
<span className='text-emerald-400'>of Care</span>
</div>
   
   <p className='text-gray-700'>
    My philosophy of care revolves in balancing evidence-based scientific research with the realities of patient lives, to make perfect, best health care for every patient.
   </p>
   
<p className='text-gray-700'>
    I encourage patients to make early healthy choices and preventive care now to avoid larger problems later. I also want patients to understand their own health issues well, so that they are better equipped to make informed decisions about their care.
</p>

<p className='text-gray-700'>
    My 15 years of experience working in hospital treating patients give me crucial knowledge for your medical needs. I look forward to being your adviser to lead a healthy happy life. 
</p>
    </div> 





 <div className=' border-l-4 border-emerald-400 rounded-2xl shadow-2xl p-8 md:p-6 mt-4 flex justify-evenly flex-col gap-4'>
<div className='flex items-center gap-2 text-2xl font-bold'>
   <User size={16} color="#0de711" />
    About My 

<span className='text-emerald-400'>Journey</span>
</div>
   
   <p className='text-gray-700'>
 I was born in Pakistan and spent my high school and college years attending <span className='text-gray-950 font-semibold'>Nishtar Medical University Multan</span> and then post-graduation in 
 <span className='text-gray-950 font-semibold'>King Edward Medical University, Lahore, </span>Pakistan. I then pursued my Internal Medicine Residency Training from the <span className='text-gray-950 font-semibold'>University of Tennessee Health Science Center Memphis, Tennessee. </span>While there, I was involved in studies on inpatient hospital medicine.
</p>

<p className='text-gray-700'>
   After completing my training, I started my career as traditional medicine with primary care and inpatient hospital medicine in Scotland Memorial Hospital/Scotland Medical Center for 3 years. After that I pursued working as an inpatient hospital medicine in UNC Nash Healthcare system and then UNC Rex healthcare. I enjoy both hospital work and outpatient preventative care.
</p>
    </div>
  
</div>

  </section>
  </>  
  )
}
