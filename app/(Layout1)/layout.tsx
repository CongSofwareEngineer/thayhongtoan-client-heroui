import React, { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <section className='w-full flex justify-center items-center min-h-[calc(100vh-56px)] h-full max-w-[1550px] m-auto md:px-12 px-5'>
      {children}
    </section>
  )
}

export default Layout
