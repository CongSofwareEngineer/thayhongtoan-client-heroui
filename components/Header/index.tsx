import Link from 'next/link'

import MyImage from '../MyImage'

import Nav from './Components/Nav'

import { images } from '@/config/images'
import useMedia from '@/hooks/useMedia'

const Header = () => {
  const { isMobile } = useMedia()

  return (
    <>
      <header className='light w-full flex justify-between items-center z-[11] fixed inset-0 h-14 bg-white'>
        <div className='w-full max-w-[1550px] px-5 m-auto flex items-center gap-3 h-full '>
          <div className='h-full relative '>
            <Link href={'/'}>
              <MyImage fill alt='logo-tcstore' className='!relative !w-auto !h-full' src={images.logo} />
            </Link>
          </div>
          <Nav />
        </div>
      </header>

      <div className='w-full h-14 opacity-0' />
    </>
  )
}

export default Header
