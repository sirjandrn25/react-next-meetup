import React from 'react'
import { meetInputType } from '../meetup/meetUpTypes'

const Input = (props: meetInputType) => {
  return (
    <input
      type={'text'}
      value={props.value}
      onChange={props.changeHandler}
      placeholder={props.placeholder}
      name={props.name}
      className={`px-3 py-1 rounded-lg border-2 border-cyan-400 focus:outline-none ${props.className}`}
    />
  )
}

export default Input
