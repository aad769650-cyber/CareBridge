import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react'

export const Slider = () => {

    const [startIndex,setStartIndex]=useState(0);
    const [mobIdx,setMobIdx]=useState(0);
    const count=2;
    const next=1;
    const images=[
        "/practice1.webp",
        "/practice2.webp",
        "/practice3.webp",
        "/practice4.webp",
        "/practice5.webp",
        "/practice6.webp",
    ];

    const handleNext=()=>{
       
        setStartIndex(
            
            (prev)=>{
               
               return prev+count>=images.length?0:prev+count
    
            })
    
        }
const handleNextMobile=()=>{
       
        setMobIdx(
            
            (prev)=>{
               
               return prev+next>=images.length?0:prev+next
    
            })
    
        }

    const handlePreviousMobile=()=>{
       
        setMobIdx(
            
            (prev)=>{
                
               return prev-next>=0?prev-next:0;
    })

}  

        

const handlePrevious=()=>{
       
        setStartIndex(
            
            (prev)=>{
                
               return prev-count>=0?prev-count:0;
    })

}


   const mobileImages=images.slice(mobIdx,mobIdx+next)
    


    const visible=images.slice(startIndex,startIndex+count)
  return (
<>
    <div className='font-bold text-2xl'>Step Inside <span className='font-extrabold  text-emerald-300 text-3xl'>Cary Physician</span></div>


    <div className='sm:flex gap-2 relative  w-full hidden  '>
       {visible.map((curr)=>{
        return <img src={curr} alt="cary clinic images" className='w-1/2 h-64 object-cover rounded-xl '/>
       })}


<button className='p-4
 rounded-full bg-white w-12 h-12 flex justify-center items-center
 
 absolute top-28 left-4 cursor-pointer' onClick={handlePrevious

}><ChevronLeft size={24} color="#53e151" /></button>


<button className='p-4 rounded-full bg-white w-12 h-12 flex justify-center items-center
 absolute top-28 right-8 cursor-pointer'  onClick={handleNext}><ChevronRight size={16} color="#53e151" /></button>
    </div>




    {/* Mobile */}




    <div className=' gap-4 relative  w-full sm:hidden '>
       {mobileImages.map((curr)=>{
        return <img src={curr} alt="cary clinic images" className='w-full h-64 rounded '/>
       })}


<button className='p-4
 rounded-full bg-white w-12  h-12 flex justify-center items-center
 
 absolute top-28 left-4 cursor-pointer' onClick={handlePreviousMobile

}><ChevronLeft size={24} color="#53e151" /></button>


<button className='p-4 rounded-full bg-white w-12 h-12 flex justify-center items-center
 absolute top-28 right-8 cursor-pointer'  onClick={handleNextMobile}><ChevronRight size={16} color="#53e151" /></button>
    </div>

</>
  )
}
