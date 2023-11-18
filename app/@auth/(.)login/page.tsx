'use client'

import React from 'react'
import {LoginPage} from '@/src/pages/LoginPage'
import {CModal} from "@/src/components/Modal";
import {useRouter} from "next/navigation";
import {LoginForm} from "@/src/modules/LoginForm";

const LoginPageNext = () => {
  const router = useRouter();
  return (
    <CModal open={true} onClose={()=>{console.log(1); router.back()}} header=''>
      <LoginForm/>
    </CModal>
  )
}

export default LoginPageNext
