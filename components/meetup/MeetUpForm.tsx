import React, { ChangeEvent, FormEvent, useState } from 'react'
import Card from '../UI/Card'
import Input from '../UI/Input'
import TextArea from '../UI/TextArea'
import { meetUpFormPropsType } from './meetUpTypes'

const MeetUpForm = (props: meetUpFormPropsType) => {
  const [meetupState, setMeetUpState] = useState({
    title: '',
    image: '',
    address: '',
    description: '',
  })
  const changeHandler = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const name = event.target.name
    const value = event.target.value
    setMeetUpState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
    props.saveHandler(meetupState)
  }
  return (
    <Card className='bg-white p-5 w-[600px]'>
      <form action='' onSubmit={submitHandler}>
        <div className='my-3 flex flex-col'>
          <label htmlFor='title'>Meetup Title</label>
          <Input
            value={meetupState.title}
            name={'title'}
            placeholder='Enter Meetup Title'
            changeHandler={changeHandler}
          />
        </div>
        <div className='my-3 flex flex-col'>
          <label htmlFor='image'>Meetup Image</label>
          <Input
            value={meetupState.image}
            name={'image'}
            placeholder='Enter Meetup image'
            changeHandler={changeHandler}
          />
        </div>
        <div className='my-3 flex flex-col'>
          <label htmlFor='address'>Meetup Address</label>
          <Input
            value={meetupState.address}
            name={'address'}
            placeholder='Enter Meetup address'
            changeHandler={changeHandler}
          />
        </div>

        <div className='my-3 flex flex-col'>
          <label htmlFor='title'>Meetup Description</label>
          <TextArea
            value={meetupState.description}
            changeHandler={changeHandler}
            placeholder='enter meetup description'
            name={'description'}
          />
        </div>
        <button className='px-3 rounded-lg bg-teal-500 hover:bg-teal-700 text-white py-2 w-[120px]'>Save</button>
      </form>
    </Card>
  )
}

export default MeetUpForm
