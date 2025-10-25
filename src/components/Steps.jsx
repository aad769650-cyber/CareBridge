import { Play } from 'lucide-react'
import React from 'react'

export const Steps = () => {
  const arr=[
    {
title:"Download the healow app from App Store (iPhone) or Google Play (Android Phone)."
    },
       {
title:"Search for our practice by entering this unique code on the healow app - GFAHDD."
    },
    {
      title:"Enter your portal username and password."
    },
    {
      title:"Set up your PIN to securely access your health record."
    }
  ]
  return (
   <>
       <div className='flex justify-center items-center  '>
    <div className=" text-center w-32 h-1 border-b-4 border-emerald-400 mt-8 rounded"></div>

</div>
<div  className='flex justify-center items-center flex-col mb-4 p-4'>
    <div className='font-bold text-3xl'>Set up the healow smartphone app in four easy steps!</div>
</div>


<section className='p-4'>

<div className='grid md:grid-cols-2 grid-cols-1 gap-4  '>
  {
    arr.map((curr,idx)=>{
      return(
        <>
        <div className='shadow-2xl rounded border-l-4 border-emerald-400  gap-8   p-4 flex  cursor-pointer transition-all duration-300 hover:scale-102 '>
          <div className='w-8 h-8 sm:w-8 sm:h-8 rounded-full bg-emerald-300 text-emerald-600 flex items-center justify-center flex-shrink-0'>{idx}</div>
          <div className=''>{curr.title}</div>
        </div>

        </>
      )
    })
  }
</div>


<div className='border-l-4 border-emerald-500 rounded-2xl shadow-2xl p-4 flex items-center justify-center mt-4'>
  <div className='flex flex-col gap-4'>


    <div className='font-bold'>Use this unique code to search our practice on the healow app</div>

    <div className=' flex items-center justify-center flex-col gap-2'>
      <p className='text-gray-700 text-sm w-36'>Practice Unique Code</p>
      <div className='w-36 p-4 bg-emerald-100 text-emerald-600 font-bold text-center rounded text-2xl'>GFAHDD</div>
    </div>


    <div className='flex justify-center items-center gap-3'>
      <div className='bg-black text-white hover:bg-gray-800 cursor-pointer p-3 rounded'>App Store</div>
      <div className='bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer p-3 rounded flex gap-2 items-center'> <span><Play color="#fcfdfc" size={16}/></span>Google Play</div>
    </div>
  </div>
</div>
</section>
   </>
  )
}
