import React from 'react'

const Slug = ({params}:{
  params:{slug:string}
}) => {
  return (
    <div>Hello Slug {params.slug}</div>
  )
}

export default Slug