"use client";
import React, { useContext } from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { colorModeContext } from './(components)/darkmode/custom-theme-provider';
import { useTheme } from '@mui/material';

const Nav = () => {
     const pathname = usePathname();
     const colorMode=useContext(colorModeContext);
     const theme=useTheme()
     
  return (
    <div className={`${theme.palette.mode === "light" ? "bg-slate-100" :"bg-black text-white"} p-5 mb-3 flex gap-10 shadow-sm`}>
        <Link className={`${pathname === '/' ? 'text-blue-600' : ''}`} href="/"> Home</Link>
        <Link className={`${pathname === '/about' ? 'text-blue-600' : ''}`} href="/about">About</Link>
        <Link className={`${pathname === '/login' ? 'text-blue-600' : ''}`} href="/login">Login</Link>
        <Link className={`${pathname === '/register' ? 'text-blue-600' : ''}`} href="/register">Register</Link>
        <Link className={`${pathname === '/services' ? 'text-blue-600' : ''}`} href="/services">Gallery</Link>
        <button onClick={colorMode}>
          {
            theme.palette.mode ==="dark" ? "Light Mode" :"Dark Moode"
          }
        </button>
    </div>
  )
}

export default Nav