import React from 'react'
import { redirect } from 'next/navigation';

const Hello = ({params}:{params:{id:number}}) => {
  if(params.id==1){
    throw new Error("Id must be greater than 1")
   }else if(params.id==2){
        redirect("/about")
   }

  return (
    <div>
      Hello id 
       
    </div>
  )
}

export default Hello