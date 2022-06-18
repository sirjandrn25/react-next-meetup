import React from 'react'

type cardProps = {
  children: React.ReactNode
  className?: string
  key?: number | string
}

const Card = (props: cardProps) => {
  return (
    <div className={`rounded-lg shadow-lg ${props.className}`} key={props.key}>
      {props.children}
    </div>
  )
}

export default Card
