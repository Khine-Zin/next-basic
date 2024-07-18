'use client';
import React, { use } from 'react'
import { useRouter } from 'next/navigation';

const Register = () => {
  const router=useRouter();
  const handleClick=()=>{
    router.back();
  }
  return (
    <div className='flex gap-10'>
    Register Page
    <button onClick={handleClick} className='underline text-blue-800'>Back</button>
    </div>
  )
}

export default Register