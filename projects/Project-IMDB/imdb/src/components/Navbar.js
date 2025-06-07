import React from 'react'
import NavbarItem from './NavbarItem'
function Navbar() {
  return (
    <div className='flex justify-center items-center gap-6 bg-gray-200 dark:bg-gray-800 p-4'>
        <NavbarItem  title="Trending" param = "fetchTrending" />
        <NavbarItem  title="Top Rated" param = "fetchTopRated" />
    </div>
  )
}

export default Navbar 