import { Check, Clock, Hotel } from 'lucide-react'
import React from 'react'

export const Education = () => {

    const card1=[
        {
            title:"Medical Education",
        para:"Nishtar Medical University, Multan Pakistan"
        
        },
         {
            title:"Residency Training",
        para:"University of Tennessee Health Science Center, Memphis TN"
        
        },
        
         {
            title:"Board Certification",
        para:"Internal Medicine - Board Certified"
        
        },
        
    ]
        
    
    const card2=[
        {
          
        para:"Scotland Medical Center, Laurinburg NC",
        icon:"tick"
        
        },
         {
               icon:"tick",
        para:"UNC Nash Healthcare System, Rocky Mount NC"
        
        },
        
         {
             icon:"tick",
        para:"UNC Rex Healthcare, Raleigh NC"
        
        },
        
         {
             icon:"tick",
        para:"North Carolina Specialty Hospital, Durham NC"
        
        },
        
    ]
   

    const icons={
        tick:<Check size={16} color="#0de711" />
    }
  return (
    <section className='flex p-4 md:p-8 gap-8 flex-col lg:flex-row'>

<div className='shadow   xl:w-full rounded-2xl'>

<div className='bg-emerald-500 p-4 rounded-t-2xl font-bold text-white gap-4 flex items-center'>
    <Hotel size={16} color="#fff" /> Education & Certification</div>

<div className=' p-4 flex flex-col justify-evenly gap-4'>


{
    card1.map((curr)=>{


        const {title,para}=curr
        return(
            <>
  <p className='font-bold'>{title}</p>
<p className='text-gray-700'>
   {para}
</p>

            </>
        )
    })
}


  </div>
</div>







<div className='shadow  xl:w-full rounded-2xl'>

<div className='bg-emerald-500 p-4 rounded-t-2xl font-bold text-white gap-4 flex items-center'>
    <Clock size={16} color="#fff" /> Professional Experience</div>

<div className=' p-4 flex flex-col justify-evenly gap-4'>

<div className='font-bold'>Primary and Hospital Internal Medicine at:</div>
{
    card2.map((curr)=>{


        const {icon,para}=curr
        return(
            <>
<div className="flex items-center gap-2">
      <p className='font-bold'>{icons[icon]}</p>
<p className='text-gray-700'>
   {para}
</p>
</div>

            </>
        )
    })
}


  </div>
</div>




    </section>
  )
}
