import React from 'react'
import { Menuitem } from './Menuitem'
import { FaBeer } from 'react-icons/fa';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';


function Header() {
  return (
    <div className='flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md max-w-6xl sm:mx-auto '>
      <div>
        <Menuitem title = 'Home' address = '/' Icon = {FaBeer}/>
      </div>
      <div>
        <Menuitem title = 'About' address = '/about' Icon = {BsFillInfoCircleFill}/>
      </div>
      <div>
        <Link href='/'>
          <h2>
            <span className='text-2xl font-bold text-gray-800 dark:text-white'>IMDB</span>
            <span className='text-2xl font-bold text-blue-600 dark:text-blue-400'>Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  )
}

export default Header