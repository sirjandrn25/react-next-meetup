import React from 'react'
import { meetUpObj } from './meetUpTypes'
import Card from '../UI/Card'
import Link from 'next/link'

const MeetUpItem = (props: meetUpObj) => {
  return (
    <li className='bg-white w-[500px] shadow-lg rounded-lg  ' key={props.id}>
      <div className='w-full h-[350px] object-cover'>
        <img src={props.image} className='h-full w-full' />
      </div>
      <div className='w-full my-5 p-5 flex flex-col justify-center items-center'>
        <h3 className='text-2xl capitalize my-3'>{props.title}</h3>
        <p className='text-lg '>{props.address}</p>
        <button className='border-2 px-3 py-1 my-3 border-cyan-400 bg-cyan-600 rounded-lg hover:bg-cyan-700 text-white'>
          <Link href={`/meetup/${props.id}`}>Details</Link>
        </button>
      </div>
    </li>
  )
}

export default MeetUpItem
