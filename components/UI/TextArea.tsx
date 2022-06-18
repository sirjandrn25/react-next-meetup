import React from 'react'
import { meetInputType } from '../meetup/meetUpTypes'

const TextArea = (props: meetInputType) => {
  return (
    <textarea
      value={props.value}
      name={props.name}
      onChange={props.changeHandler}
      placeholder={props.placeholder}
      className={`w-full h-[150px] px-3 py-2 rounded-lg border-2 focus:outline-none border-cyan-400`}
    />
  )
}

export default TextArea
