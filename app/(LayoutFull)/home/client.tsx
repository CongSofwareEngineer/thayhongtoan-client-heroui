'use client'

import InfoHome from './Component/InfoHome'
import Register from './Component/Register'
import SocialMedia from './Component/SocialMedia'

import { images } from '@/config/images'
import MyImage from '@/components/MyImage'

function HomeScreen() {
  return (
    <div className='w-full h-full  flex flex-col items-center justify-center '>
      <div className='w-full max-h-[calc(100vh-56px)] min-h-[calc(100vh-56px)] relative overflow-hidden'>
        <div className='absolute-center flex justify-center items-center w-full h-full'>
          <MyImage noAnimation alt='banner' className='object-cover !min-w-full !min-h-full  ' src={images.home.banner} />
        </div>
      </div>
      <InfoHome />
      <SocialMedia />
      <Register />
    </div>
  )
}

export default HomeScreen
