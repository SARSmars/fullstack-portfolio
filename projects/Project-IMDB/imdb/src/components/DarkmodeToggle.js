"use client"
import React from 'react'
import {MdLightMode} from 'react-icons/md'
import {BsFillMoonFill} from 'react-icons/bs'
import { useTheme } from 'next-themes'
import { useEffect } from 'react';
import { useState } from 'react'


export const DarkmodeToggle = () => {
const { systemTheme, theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);
useEffect(()=>{
  setMounted(true);
}, [])
const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <>
    {setMounted && (currentTheme === 'light' ? (<BsFillMoonFill className='text-3xl hover:text-amber-300 size-3' onClick={() => setTheme('dark')}/>) : (<MdLightMode className='text-4xl size-4 hover:text-amber-300' onClick={() => setTheme('light')} />))}
    </>
  )
} 
