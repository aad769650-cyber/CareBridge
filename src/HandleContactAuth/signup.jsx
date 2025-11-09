import { Phone } from 'lucide-react'
import React from 'react'
import * as Yup from "yup"
export const signup = Yup.object({

    firstName:Yup.string().min(2).max(25).required("Complete First Name is Required"),
    lastName:Yup.string().min(2).max(25).required("Complete Last Name is Required"),
email:Yup.string().email("Email is required").required("Email is required"),
Phone:Yup.number().required("Phone number is required"),
age:Yup.number().min(5).max(100).required("please enter valid age")

})