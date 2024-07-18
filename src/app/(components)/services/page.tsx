import React from 'react'
import { PhotoData,photoData } from './photo'
import Link from 'next/link'
import Image from 'next/image'

const Gallery = () => {
  return (
    <main className='container mx-auto'>
        <h1 className='text-center text-3xl font-bold my-4'>Amazing Sushi Snack</h1>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {
              photoData.map((data)=>{
                return <Link key={data.id} href={`/services/${data.id}`}>
                    <Image alt='data.name' src={data.src} className='w-full object-cover aspect-square'/>
                </Link>
              })  
            }
        </div>
    </main>
  )
}

export default Gallery