import Link from 'next/link'
import React from 'react'

export const Menuitem = ({title, address, Icon}) => {// this info comes from header
  return (
    <div>
      <Link href={address} className='flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200'>
        {/* Icon is a prop that is passed to this component */}
        <p>{title}</p>
        <Icon size={20} />
      </Link>
    </div>
  )
}
