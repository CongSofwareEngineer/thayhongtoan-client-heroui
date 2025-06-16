'use client'
import { PropsWithChildren, Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import dynamic from 'next/dynamic'

import Header from '../Header'
// import MyModal from '../MyModal'
import LoadingFirstLoad from '../LoadingFirstLoad'
import MyDrawer from '../MyDrawer'
// import Modal2 from '../Modal2'

const MyModal = dynamic(() => import('../MyModal'), {
  ssr: false,
})

const Modal2 = dynamic(() => import('../Modal2'), {
  ssr: false,
})

const ClientRender = ({ children }: PropsWithChildren) => {
  return (
    <Suspense>
      <Header />
      <main className='w-full h-full min-h-[calc(100vh-56px)]  '>
        {children}
        <LoadingFirstLoad />
        <Modal2 />
        <MyModal />
        <MyDrawer />

        <ToastContainer position='top-right' style={{ marginTop: 10 }} />
      </main>
    </Suspense>
  )
}

export default ClientRender
