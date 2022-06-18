import React from 'react'
import MainNavigation from './MainNavigation'

type propsType = {
  children: React.ReactNode
}

const Layout = (props: propsType) => {
  return (
    <div>
      <header>
        <MainNavigation />
      </header>
      <main className='w-screen h-auto flex flex-col justify-center items-center p-5'>{props.children}</main>
    </div>
  )
}

export default Layout
