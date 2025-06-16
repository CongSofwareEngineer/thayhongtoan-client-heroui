'use client'

import MyImage from '@/components/MyImage'
import { images } from '@/config/images'

interface Form {
  name?: string
  age?: number
}

interface FormError {
  name?: string
  age?: string
}
function HomeScreen() {
  return (
    <div className='w-full h-full  flex flex-col items-center justify-center '>
      <div className='w-full max-h-[calc(100vh-56px)] min-h-[calc(100vh-56px)] relative overflow-hidden'>
        <div className='absolute-center flex justify-center items-center w-full h-full'>
          <MyImage alt='banner' className=' !min-w-full !min-h-full  ' src={images.home.banner} />
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
