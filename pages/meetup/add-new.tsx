import React from 'react'
import MeetUpForm from '../../components/meetup/MeetUpForm'
import { meetUpObj } from '../../components/meetup/meetUpTypes'

const AddNewMeetUp = () => {
  const saveHandler = (data: meetUpObj) => {
    console.log(data)
  }
  return <MeetUpForm saveHandler={saveHandler} />
}

export default AddNewMeetUp
