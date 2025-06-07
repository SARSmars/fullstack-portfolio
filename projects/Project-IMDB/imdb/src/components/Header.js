import React from 'react'
import { Menuitem } from './Menuitem'
import { FaBeer } from 'react-icons/fa';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import { DarkmodeToggle } from './DarkmodeToggle';


function Header() {
  return (
    <div className='flex bg-testcolor items-center justify-between p-4 dark:bg-red-900 shadow-md max-w-6xl sm:mx-auto '>
      <div>
        <Menuitem title = 'Home' address = '/' Icon = {FaBeer}/>
      </div>
      <div>
        <Menuitem title = 'About' address = '/about' Icon = {BsFillInfoCircleFill}/>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <DarkmodeToggle />
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