"use client"
// This is a client component that creates a link to the genre page with the title and param passed as props
import React from 'react'
import  Link from 'next/link'
import { useSearchParams } from 'next/navigation'
function NavbarItem({title, param}) {
  // this component is used to create a link to the genre page with the title and param passed as props
    const searchParams = useSearchParams();
    // useSearchParams is a hook that returns the current search params of the URL
    const genre = searchParams.get('genre');
    // get the genre from the search params
  return (
    <div>
        <Link
        className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 ${genre && genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-300' : ''}`}
         href={`/?genre=${param}`}>
        {title}
        </Link>
    </div>
  ) 
}

export default NavbarItem