import React from 'react'

const Layout = (props:{
    children:React.ReactNode,
    // modals:React.ReactNode
}) => {
  return (
    <div>
        {/* {props.modals} */}
        {props.children}
      
    </div>
  )
}

export default Layout