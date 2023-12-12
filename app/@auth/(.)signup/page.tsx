'use client'

import React from 'react'
import {CModal} from "@/src/components/Modal";
import {useRouter} from "next/navigation";
import {SignUpForm} from "@/src/pages/SignUpPage/modules/SignUpForm";

const Page = () => {
  const router = useRouter();
  return (
    <CModal open={true} onClose={()=>{router.back()}} header=''>
      <SignUpForm/>
    </CModal>
  )
}

export default Page
