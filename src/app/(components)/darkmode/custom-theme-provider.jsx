"use client";

import { createTheme, ThemeProvider } from '@mui/material';
import React, { createContext, useState } from 'react'

export const colorModeContext=createContext(null);

const customThemeProvider = ({children}) => {
    const [mode,setMode]=useState("light");
    const colorMode=()=>{
        setMode(prevMode=>prevMode ==="light" ? "dark" :"light")
    };
    

    const theme = createTheme({
        palette: {
          mode: mode,
        },
      });
  return (
    <colorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </colorModeContext.Provider>
  )
}

export default customThemeProvider