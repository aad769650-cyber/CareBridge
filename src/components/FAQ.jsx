import React, { useState } from 'react'

export const FAQ = () => {
  const [isActive,setIsActive]=useState(false)
   const faqs = [
  {
    id: "faq-1",
    question: "Do I have to pay to get access to the Patient Portal and healow app?",
    answer:
      "No. Access to the Patient Portal and the healow app is completely free for all Cary Physicians patients. You only need an active account created by our office staff."
  },
  {
    id: "faq-2",
    question: "How can I schedule or reschedule an appointment online?",
    answer:
      "You can schedule or reschedule an appointment through the Patient Portal or the healow app. After logging in, go to 'Appointments' and choose a convenient date and time. You can also call our office directly."
  },
  {
    id: "faq-3",
    question: "Can I request prescription refills through the Patient Portal?",
    answer:
      "Yes. The Patient Portal and healow app allow you to request prescription refills directly from your provider. Requests are typically processed within 24–48 business hours."
  },
  {
    id: "faq-4",
    question: "What should I do if I forget my Patient Portal password?",
    answer:
      "Go to the Patient Portal login page and click on 'Forgot Password.' Follow the instructions to reset your password securely. If you still have trouble, contact our office for assistance."
  },
  {
    id: "faq-5",
    question: "Is my health information secure on the healow app?",
    answer:
      "Yes. The healow app uses industry-standard encryption and secure authentication to ensure your personal health information remains private and protected."
  }
];


const handleClick=(idx)=>{

  setIsActive(()=>{
   return isActive==idx?"false":idx
  })

  
}


  return (
    <>
      <div className='flex justify-center items-center  '>
    <div className=" text-center w-32 h-1 border-b-4 border-emerald-400 mt-8 rounded"></div>

</div>
<div  className='flex justify-center items-center flex-col mb-4 p-4'>
    <div className='font-bold text-3xl'>Frequently Asked Questions</div>

</div>



<section className='  '>
  <div className=''>
{faqs.map((curr,idx)=>{
    console.log(isActive==idx,idx,isActive);
return (
  <>
  <div className='border-emerald-400 p-4 m-4 rounded  shadow border-l-4' onClick={()=>handleClick(idx)}>
<div className='flex items-center justify-between  font-semibold '>
   <div> {curr.question}</div>
  <button className='bg-emerald-200 font-bold cursor-pointer rounded-full flex-shrink-0 p-2' onClick={()=>handleClick(idx)}>
{
  isActive===idx?  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4bbb13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>:
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4bbb13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>

}
  
</button>




</div>

<div className={`${isActive===idx?"block":"hidden"} text-gray-600`}>{curr.answer}</div>
</div>

  </>
)
})}
  </div>


</section>

    </>
  )
}
// 