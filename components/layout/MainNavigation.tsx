import React from 'react'
import Link from 'next/link'

const MainNavigation = () => {
  return (
    <nav className='w-screen flex flex-row justify-around items-center p-5 bg-purple-700'>
      <div className='text-white text-2xl font-bold'>
        <Link href={'/'}>React Meetups</Link>
      </div>
      <ul className='flex flex-row items-center'>
        <li className='text-slate-200 font-medium mx-3 hover:text-white'>
          <Link href={'/meetup'}>All Meetups</Link>
        </li>
        <li className='text-slate-200 font-medium mx-3 hover:text-white'>
          <Link href={'/meetup/add-new'}>Add New Meetup</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
