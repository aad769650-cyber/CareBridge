import { Facebook, Github, Linkedin } from 'lucide-react'
import React from 'react'

export const MapSection = () => {

const timeTable=[
    {
        day:"Monday",time:"9:00AM-4:00PM"
    }
    ,
     {
        day:"Tuesday",time:"9:00AM-4:00PM"
    },
     {
        day:"Wednesday",time:"9:00AM-4:00PM"
    },
     {
        day:"Thursday",time:"9:00AM-4:00PM"
    },
      {
        day:"Friday",time:"9:00AM-1:00PM"
    },
      {
        day:"Saturday",time:"Closed"
    },
      {
        day:"Sunday",time:"Closed"
    }
]


    const icons=[
        {
            title:"Facebook",
                    link:"https://facebook.com"
    
        },
{
    title:"Linkedin",
            link:"https://github.com/aad769650-cyber"
}

,{
    title:"Github" ,
            link:"https://github.com/aad769650-cyber"
}
    ]


    const iconObj={
        Facebook:<Facebook color="#120fc2"/>,
        Linkedin:<Linkedin color="#120fc2"/>,
        Github:<Github/>

    }
    console.log(iconObj.Github)
  return (
   <>
   
 <div className='w-full rounded-2xl mt-4'>
      <iframe className="w-full h-78 rounded-t" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.262785099775!2d-78.76917185317949!3d35.74549023669186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf3489455e797%3A0x2b1c65e21189b160!2s115%20Parkway%20Office%20Ct%20Suite%20104%2C%20Cary%2C%20NC%2027518%2C%20USA!5e0!3m2!1sen!2s!4v1761029810292!5m2!1sen!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className=' bg-emerald-400 p-4 flex flex-col gap-4 rounded-b-2xl'>

        <div>
            <div className='font-bold text-2xl text-white'>CareBridge Primary Care, PLLC</div>
            <p className='text-gray-100 '>Compassionate Care, Exceptional Results</p>
        </div>

        <div>
           <div className="font-semibold  text-white"> Address:</div>
<p className='text-gray-50 '>115 Parkway Office Ct, Suite 104, Cary NC, 27518</p>
     </div>
        
        <div>
         <div className="font-semibold  text-white">   Phone:</div>
            <p className='text-gray-50 '>
03281700284</p>
        </div>
        
        <div>
       <div className="font-semibold  text-white">Fax:</div>
            <p className='text-gray-50 '>
1 919 912 5442</p>
        </div>
        
        <div className='flex flex-col'>
           <div className="font-semibold  text-white">Email:</div>
<a href="mailto:aad769650@gmail.com " className='text-gray-50 hover:underline'>aad769650.com</a>
        </div>
        
        <div className="font-semibold  text-white">Office Hours</div>

        <div>
            <div className=' w-5/8  justify-between'>


        
               {
                timeTable.map((curr)=>{
                    const {day,time}=curr
                    return(
                        <>
                        
                     <div className='flex justify-between my-2'>
                           <span className='text-white'>{day}</span>
<span className={time=="Closed"?"text-red-400":"text-white"}>{time}</span>
                     </div>

</>
                    )
                })
            }
   

            </div>
        </div>
        
       
        
        <div className="font-semibold  text-white">Connect with Us</div>

        <div className='flex gap-4'>
            {
               icons.map((curr)=>{
         
                
                
                return(
                    <>
                    
                
                    <a href={curr.link} className='w-10 h-10 rounded-full bg-white flex items-center justify-center  cursor-pointer hover:bg-gray-300'>{ iconObj[curr.title]}</a>
                    
                    </>
                 
                )
               })
             
            }
        </div>
      </div>
 </div>
   </>
  )
}
