import { Info } from 'lucide-react'
import React from 'react'

export const InsuranceProvider = () => {

    const primary=[

  { title: "Cigna" },
  { title: "Cigna Health Spring" },
  { title: "Humana" },
  { title: "Medcost" },
  { title: "Medicaid" },
  { title: "Medicare" },
  { title: "Molina" }
];

    

const additional = [
  { title: "Multiplan" },
  { title: "RR Medicare" },
  { title: "Tricare East" },
  { title: "Tricare For Life" },
  { title: "UHC" },
  { title: "United American Ins Company" },
  { title: "Wellcare" }
];


    
  return (
   <>
   
   <section className='bg-gray-900 text-white flex items-center justify-center p-4'>


<div className='flex items-center justify-center flex-col gap-4'>

<div className='inline border-b-4 border-emerald-500 text-2xl md:text-3xl font-bold p-2'>Accepted Insurance Providers
    
</div>

<p className='text-gray-200 '>We partner with a wide range of insurance providers to make quality healthcare accessible for you and your family.</p>

<div className='border-l-4 border-emerald-500 rounded-xl  bg-gray-800 flex p-8 gap-2  '>
<Info color="#22f406" />
<p>Our clinic accepts many major insurance plans. Our staff will verify your coverage before your appointment to ensure a seamless experience.</p>
</div>




<div className='flex flex-wrap gap-4'>

    <div className='
    
    p-4
    flex
    w-full
    rounded-xl
    md:w-[500px]
    flex-col
    gap-4
    shadow-2xl bg-gray-800 font-semibold'>
    <div className='text-emerald-400 text-2xl '>Primary Provider</div>
        {
            primary.map((curr)=>{
                // console.log(curr);
                
                const {title}=curr
                return(
                    <>
                    <div className='flex gap-4 hover:bg-emerald-600 transition-all p-4 rounded cursor-pointer'>
                        <div className='w-8 h-8 rounded-full bg-emerald-400'></div>
                    <div className='md:w-2xs'>{title}</div>
                    </div>
                    </>
                )
            })
        }
    </div>




   
    <div className='
    
    p-4
    flex
    w-full
 md:w-[500px]
 rounded-xl
    flex-col
    gap-4
    shadow-2xl bg-gray-800 font-semibold'>
    <div className='text-emerald-400 text-2xl'>Additional Provider</div>
        
        {
             additional.map((curr)=>{
                const {title}=curr
                return(
                    <>
                   <div className='flex gap-4 hover:bg-emerald-600 transition-all p-4 rounded cursor-pointer'>
                        <div className='w-8 h-8 rounded-full bg-emerald-400'></div>
                    <div className='md:w-2xs'>{title}</div>
                    </div>
                    </>
                )
            })
        }
    </div>
</div>



<div className='text-gray-500 p-4'>
    <span className='text-emerald-400'>*</span> Most insurances have multiple variations, so please call your insurance provider to confirm if we are in-network.
</div>



</div>



   </section>
   
   </>
  )
}
