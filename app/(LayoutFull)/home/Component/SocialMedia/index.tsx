import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaSquarePhoneFlip } from 'react-icons/fa6'

import { LINK_CONTACT } from '@/constants/app'
import { images } from '@/config/images'
import useMedia from '@/hooks/useMedia'

const SocialMedia: NextPage = () => {
  const { isMobile } = useMedia()

  if (isMobile) {
    return <></>
  }

  return (
    <div
      className='w-auto fixed top-[50%] -translate-y-[50%]  left-0 p-[2px] pl-0 rounded-r-2xl rounded-br-2xl '
      style={{
        background:
          'linear-gradient(135.25deg, rgb(88, 321, 226) 18.39%, rgb(166, 247, 242) 59.75%, rgb(209, 164, 229) 80.43%, rgb(170, 124, 191) 101.11%)',
      }}
    >
      <div className='bg-black/80 flex flex-col py-4 px-2  gap-3 w-12 rounded-r-2xl  rounded-br-2xl'>
        <Link href={LINK_CONTACT.Zalo} target='_blank'>
          <Image fill alt={LINK_CONTACT.Zalo} className='hover:scale-110 cursor-pointer !relative !w-full !h-auto' src={images.icons.iconZalo} />
        </Link>

        <Link href={LINK_CONTACT.SDT} target='_blank'>
          <FaSquarePhoneFlip className='text-green-500 hover:scale-110' style={{ fontSize: 32 }} />
        </Link>
        <Link className='w-[90%]' href={LINK_CONTACT.FaceBook} target='_blank'>
          <Image fill alt={LINK_CONTACT.Zalo} className='hover:scale-110 cursor-pointer !relative !w-full !h-auto' src={images.icons.iconFacebook} />
        </Link>
      </div>
    </div>
  )
}

export default SocialMedia
