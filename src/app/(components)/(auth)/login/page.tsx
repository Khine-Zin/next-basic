'use client';
import React from 'react'
import { useRouter } from 'next/navigation';

const Login = () => {
  const router=useRouter();
  const handleClick=()=>{
    router.push("/register")
  }
  return (
    <div>
      
    <div className='flex gap-10'>
      Login Page
      <button onClick={handleClick} className='underline text-blue-800'>Go to register</button>
      </div>
    </div>
  )
}

export default Login