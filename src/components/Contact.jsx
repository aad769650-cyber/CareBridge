import { useFormik } from 'formik'
import { CalendarRange, Check, UserRound } from 'lucide-react'
import React from 'react'
import { signup } from '../HandleContactAuth/signup'

export const Contact = () => {


  const initialValues={
    firstName:"",
    lastName:"",
    email:"",
    Phone:"",
    age:"",
    gender:"", 
    insurance:""
  }


const {values,handleBlur,handleChange,handleSubmit,touched,errors}=useFormik({
  initialValues,
  validationSchema:signup,
  onSubmit:(values)=>{
    console.log(values);
    
  }

  
  
})

// console.log(values,touched,errors);
  return (
    <section className='border-red-400 bg-emerald-100 p-4 sm:flex flex-col justify-center items-center'>
     
    <div className='rounded-t-2xl shadow-2xl md:w-4xl bg-white'>


<div className='bg-emerald-400 rounded-t-2xl '>
  <div className='flex items-center gap-4 p-4'>
    <img src="/logo.webp" alt="Logo" className='w-8 aspect-auto h-24'/>

    <div>
      <div className='font-bold text-2xl text-white'>CareBridge Primary Care </div>
<div className='text-gray-200'>Schedule your visit with our healthcare professionals</div>
    </div>
  </div>
</div>


   















    <form action="" className='p-4 grid gap-4 grid-cols-1 md:grid-cols-2' onSubmit={handleSubmit}>


<div className='bg-gray-50 rounded-xl p-4 '>


<div className='flex items-center gap-2'>

   <UserRound color="#08fd24" strokeWidth={0.75} />

   <div className='text-emerald-400 font-semibold text-xl'>Patient Information</div>



   



</div>
















<div>
  
  <div  className=''>

<div className='flex  gap-3 items-center justify-center p-4'>

<label htmlFor="" >
  <span className=' font-semibold text-sm'>FirstName</span>
<br />
<input type="text" placeholder='John' className='h-12 w-full shadow-gray-400 shadow-2xl rounded py-2 focus:border-emerald-300 focus:outline-emerald-300 p-4' name='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur}/>

<div className='text-red-500 text-sm'>{touched.firstName&&errors.firstName?errors.firstName:null}</div>

</label>



<label htmlFor="" >
  <span className='font-semibold text-sm'>LastName:</span>
<br />
<input type="text" placeholder='Doe' className='h-12 w-full shadow-gray-400 shadow-2xl rounded py-2 focus:border-emerald-300 focus:outline-emerald-300 p-4' name='lastName' value={values.lastName} onChange={handleChange} onBlur={handleBlur}/>
<div className='text-red-500 text-sm'>{touched.lastName&&errors.lastName?errors.lastName:null}</div>

</label>












</div>




<div className=' p-4'>
 <span className=' font-semibold text-sm'>Email</span>
<br />
  <input type="email" name="email" placeholder='John@Example.com'  className='h-12 w-full p-4 shadow-gray-400 shadow-2xl rounded py-2 focus:border-emerald-300 focus:outline-emerald-300 '  value={values.email} onChange={handleChange} onBlur={handleBlur}/>

<div className='text-red-500 text-sm'>{touched.email&&errors.email?errors.email:null}</div>

</div>










<div className=' p-4'>
 <span className=' font-semibold text-sm'>Phone Number</span>
<br />
  <input type="text" name="Phone" placeholder='XXX-XXX-XXXX'  className='w-full h-12 p-4 shadow-gray-400 shadow-2xl rounded py-2 focus:border-emerald-300 focus:outline-emerald-300 '  value={values.Phone} onChange={handleChange} onBlur={handleBlur}/>
<div className='text-red-500 text-sm'>{touched.Phone&&errors.Phone?errors.Phone:null}</div>

</div>



<div className='flex  gap-3 items-center justify-center p-4'>

<label htmlFor="" >
  <span className=' font-semibold text-sm'>Age</span>
<br />
<input type="number" placeholder='' className='h-12 w-full shadow-gray-400 shadow-2xl rounded py-2 focus:border-emerald-300 focus:outline-emerald-300 p-4' name='age' value={values.age} onChange={handleChange} onBlur={handleBlur}/>
<div className='text-red-500 text-sm'>{touched.age&&errors.age?errors.age:null}</div>

</label>



<label htmlFor=""  >
 
    <span className=' font-semibold text-sm'> Gender</span>
  <br />
<select className='h-12  p-4 shadow-gray-300 shadow-2xl rounded py-2 focus:border-emerald-300 focus:outline-emerald-300 ' name='gender' value={values.gender} onChange={handleChange} onBlur={handleBlur}>
  <option>Male</option>
  <option>Female</option>
  <option>Other</option>
  
  
  </select></label>












</div>








   </div>



</div>



</div>



























  <div  className='p-4 bg-gray-50 rounded-xl'>
<div className='flex items-center gap-2'>


   <CalendarRange color="#08fd24" strokeWidth={0.75} />
  

   <div className='text-emerald-400 font-semibold text-xl'>Appointment Details</div>



   



</div>

<div className=' p-4'>
<div>
  
<label htmlFor=""  >
 
    <span className=' font-semibold text-sm'> Insurance Holder</span>
  <br />
<select className='h-12  w-full border-2 border-gray-100 p-4 shadow-gray-400 shadow-2xl rounded py-2 focus:border-emerald-300 focus:outline-emerald-300 '>
  <option>Yes</option>
  <option>No</option>
  
  
  
  </select></label>

</div>











</div>




<div className=' p-4'>
 
    <span className=' font-semibold text-sm'> Insurance Company</span>
<br />
  <input type="text"  placeholder='Blue Cross Blue Shield'  className='h-12 w-full p-4 shadow-gray-400 shadow-2xl rounded py-2 focus:border-emerald-300 focus:outline-emerald-300 ' name='gender' value={values.gender} onChange={handleChange} onBlur={handleBlur}/>
<div className='text-red-500 text-sm'>{touched.age&&errors.age?errors.age:null}</div>



</div>










<div className=' p-4'>
    <span className=' font-semibold text-sm'> Reason of Visit</span>
<br />
  <textarea  placeholder="Please describe your symptoms or reason of visit" className='w-full h-48  p-4 shadow-gray-400 shadow-2xl rounded py-2 focus:border-emerald-300 focus:outline-emerald-300 '/>












</div>






<div className='flex justify-end items-center gap-3'>
  <button className='bg-gray-300 hover:bg-gray-400 px-4 py-3 rounded font-semibold'>Cancel</button>
<button className='bg-emerald-400 hover:bg-emerald-500 px-4 py-3 flex items-center rounded gap-2'  type='submit'><span className='rounded-full bg-white text-white font-semibold p-1'><Check size={16} color="#0fff6b" /></span>Schedule Appointment</button>
</div>
   </div>

    </form>
    
    </div>
    
    







    
    <div className='p-4 text-center text-sm text-gray-600'>© 2025 CareBridge Primary Care Pllc. All rights reserved.</div>
    
    </section>
  )
}
