"use client"
import React from 'react'

const ErrorHandler = ({error}:{error:Error}) => {
  return (
    <div>{error.message}</div>
  )
}

export default ErrorHandler