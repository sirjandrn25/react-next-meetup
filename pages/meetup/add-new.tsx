import React, { useState } from 'react'
import MeetUpForm from '../../components/meetup/MeetUpForm'
import { meetUpObj } from '../../components/meetup/meetUpTypes'
import axios from 'axios'

const AddNewMeetUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const saveHandler = async (data: meetUpObj) => {
    const config = {
      url: '/api/meetup',
      method: 'post',
      data: data,
    }
    setIsLoading(true)
    await axios(config)
      .then((resp) => {
        console.log(resp)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return isLoading ? <p>loading....</p> : <MeetUpForm saveHandler={saveHandler} />
}

export default AddNewMeetUp
