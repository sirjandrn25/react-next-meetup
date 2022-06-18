import React from 'react'
import { meetUpObj } from './meetUpTypes'
import Card from '../UI/Card'

const MeetUpDetail = (props: meetUpObj) => {
  return (
    <Card className='w-[800px] h-auto '>
      <div className='w-full h-[550px] object-cover'>
        <img src={props.image} className={'w-full h-full '} />
      </div>
      <div className='w-full p-5 flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-bold my-2 capitalize'>{props.title}</h2>
        <p className='text-lg font-medium my-2'>{props.address}</p>
        <p className='text-md font-normal my-2'>{props.description}</p>
      </div>
    </Card>
  )
}

export default MeetUpDetail
