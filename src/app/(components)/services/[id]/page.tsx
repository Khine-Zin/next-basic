"use client";
import React from 'react'
import { PhotoData,photoData } from '../photo';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const GalleryOne = ({params}:{
   params: {id:number}
}) => {
  const data:PhotoData=photoData.filter(p=>p.id==params.id);
  const router=useRouter();
  const handleClick=()=>{
    router.back();
  }
  
  return (
    <div>
        {
          data.map((data)=>{
           return <div key={data.id} className='container mx-auto'>
            <h1 className='text-center text-3xl font-bold my-4'>{data.name}</h1>
            <button onClick={handleClick} className='underline text-blue-800'>Back</button>
            <div className='flex flex-col justify-center items-center'>
               <Image alt='data.name' src={data.src} className='w-[50%] object-cover  '/>
              <div className='flex text-center text-lg font-bold gap-4'>
              <h3 className=''>{data.photographer}</h3>
              <h3 className=''>{data.location}</h3>
              </div>
            </div>
        </div>
          })
        }
    </div>
  )
}

export default GalleryOne