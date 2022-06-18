import React, { ChangeEvent } from 'react'

export type meetUpObj = {
  id?: number
  title: string
  description?: string
  image: string
  address: string
}

export type meetInputType = {
  placeholder: string
  value: string
  changeHandler: (event: React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
  name: string
}

// export type meetupSaveType = {
//   saveHandler: (data: meetUpObj) => void
// }
export type meetUpFormPropsType = {
  saveHandler: (data: meetUpObj) => void
}
