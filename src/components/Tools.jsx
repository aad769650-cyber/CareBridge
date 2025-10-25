import { Check } from 'lucide-react'
import React, { useState } from 'react'

export const Tools = () => {

const [step,setSteps]=useState(true)

const [notification,setNotification]=useState(false)
const [virtuals,setVirtual]=useState(false)













const steps=[
    {
icon:"icon",
title:"Make copayments"

    },
    {
icon:"icon",
title:"checkPay balances privately & securely"

    },
    {
icon:"icon",
title:"checkElectronically sign consent forms"

    },
    {
icon:"icon",title:"checkComplete questionnaires"

    },
]


const reminders=[
        {
icon:"icon",
title:"Receive messages in the mode you prefer — by Portal, app, email, or text."

    },
    {
icon:"icon",
title:"View your personal health records and lab results, and request prescription refills and referrals."

    },
    {
icon:"icon",
title:"checkSecurely exchange messages with your provider, and view health education materials."

    },
 
]


const virtual=[
    {
icon:"icon",
title:"For convenient, quality care – at work, at home, or on the road"

    },
    {
icon:"icon",
title:"checkSee your own physician for non-emergency and follow-up care"

    },
    {
icon:"icon",
title:"checkAvoid the expense of travel, time off from work, or hiring a babysitter"

    },
    {
icon:"icon",
title:"checkTeleVisits are easy – just use your smartphone, laptop, or PC"

    },
]


console.log(step,notification,virtual);



const icons={
    icon:<Check size={16} color="#003cb3" />
}
  return (
   <>
   
   <div className='flex justify-center items-center  '>
    <div className=" text-center w-32 h-1 border-b-4 border-emerald-400 mt-8 rounded"></div>

</div>
<div  className='flex justify-center items-center flex-col mb-4 p-4'>
    <div className='font-bold text-3xl'>Tools for Patients' Convenience</div>
</div>
     
   

   <section className=' p-4 '>

    <div className='flex items-center justify-center gap-4 p-1 shadow-md  flex-wrap'>


<div className='flex justify-evenly md:text-[16px] text-sm'>
    <div className={`${step?"border-b-2 border-emerald-400 text-emerald-400":"text-gray-600"} hover:text-emerald-300 transition-all duration- cursor-pointer   p-4 font-semibold`} 
onClick={()=>{
    setVirtual(false);
    setNotification(false);
    setSteps(true)
}}

>
Easy-Check-in
</div>

<div className={`${notification?"border-b-2 border-emerald-400 text-emerald-400":"text-gray-600 "} hover:text-emerald-300 transition-all duration- cursor-pointer  p-4 font-semibold`}

onClick={()=>{
    setVirtual(false);
    setNotification(true);
    setSteps(false)
}}

>
    Reminder & Notifications 
</div>
</div>
<div className={`${virtuals?"border-b-2 border-emerald-400 text-emerald-400":"text-gray-600 "} hover:text-emerald-300 transition-all duration- cursor-pointer  p-4 font-semibold`}

onClick={()=>{
    setVirtual(true);
    setNotification(false);
    setSteps(false)
}}

>
    Virtual Visits
</div>



    </div>
<hr  className='text-gray-100 '/>





<div className=' '>
  <div className={`${step?"flex":"hidden"} flex-wrap shadow-md rounded-2xl`}>
      <div className=' md:w-1/2 w-full   p-4'>
        <img src="kiosk-checkin-app.png" alt="kiosk-checkin-app" />
    </div>





    
    <div className='md:min-h-[70vh] md:w-1/2 w-full p-4'>
      <div className='text-2xl'>  Our Kiosk app quickly and
easily checks you in</div>
        <div>
            {
                steps.map((curr)=>{

                    return (
                        <>
                        <div className='flex gap-2 p-4 items-center '>

                            <div>
{icons[curr.icon]}
                            </div>

                            <div>
                                {curr.title}
                            </div>
                        </div>
                        </>
                    )

                })
            }
        </div>
    </div>
  </div>





{/* Reminder */}


  <div className={`${notification?"flex":"hidden"} flex-wrap shadow-md rounded-2xl`}>
      <div className=' md:w-1/2 w-full   p-4'>
        <img src="reminders.png" alt="reminders" />
    </div>





    
    <div className='md:h-[70vh] md:w-1/2 w-full p-4'>
      <div className='text-2xl'>  
With Patient Portal you'll never forget your doctor's visit!</div>
        <div>
            {
                reminders.map((curr)=>{

                    return (
                        <>
                        <div className='flex gap-2 p-4 items-center '>

                            <div>
{icons[curr.icon]}
                            </div>

                            <div>
                                {curr.title}
                            </div>
                        </div>
                        </>
                    )

                })
            }

            <p>If you are not receiving reminders and notifications and wish to do so, please ask at our front desk.</p>
        </div>
    </div>
  </div>





  {/* Virtual visit */}


    <div className={`${virtuals?"flex":"hidden"} flex-wrap shadow-md rounded-2xl`}>
      <div className=' md:w-1/2 w-full   p-4'>
   <iframe className='rounded w-full md:h-[300px]  lg:w-[560px]  lg:h-[400px]' src="https://www.youtube.com/embed/HFrR3D2BMaQ" title="healow TeleVisits: How to get your patients started with healow TeleVisits" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>





    
    <div className='md:min-h-[70vh] md:w-1/2 w-full p-4'>
      <div className='text-2xl'>  
We offer the convenience of healow TeleVisits!</div>
        <div>

            <div className='font-bold mt-4'>
                When, why, and how to use healow TeleVisits
            </div>
            {
                virtual.map((curr)=>{

                    return (
                        <>
                        <div className='flex gap-2 p-4 items-center '>

                            <div>
{icons[curr.icon]}
                            </div>

                            <div>
                                {curr.title}
                            </div>
                        </div>
                        </>
                    )

                })
            }
        </div>
    </div>
  </div>
</div>


   </section>
</>
    )
}
