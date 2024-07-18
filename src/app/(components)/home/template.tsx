import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        {children}
        <div>Hello Layout</div>
    </div>
  )
}

export default Layout