import Link from 'next/link'
import { AiFillContacts, AiFillHome } from 'react-icons/ai'
import { FaFacebook, FaSquarePhoneFlip } from 'react-icons/fa6'
import { FiAlignJustify } from 'react-icons/fi'
import { IoIosInformationCircleOutline } from 'react-icons/io'

import MyImage from '@/components/MyImage'
import { images } from '@/config/images'
import { LINK_CONTACT } from '@/constants/app'
import useDrawer from '@/hooks/useDrawer'
import useLanguage from '@/hooks/useLanguage'
import useMedia from '@/hooks/useMedia'

const Nav = () => {
  const { isMobile } = useMedia()
  const { translate } = useLanguage()
  const { openDrawer } = useDrawer()

  const renderContact = () => {
    return (
      <div className='flex gap-3 items-center'>
        <Link className='flex gap-1 items-center' href={LINK_CONTACT.Zalo} target='_blank'>
          <MyImage fill alt='icon zalo' className='!w-6  !h-6 !relative' src={images.icons.iconZalo} />
          {!isMobile && <span>0344798392</span>}
        </Link>
        <Link className='flex gap-1 items-center' href={LINK_CONTACT.SDT} target='_blank'>
          <FaSquarePhoneFlip className='text-blue-700' style={{ fontSize: 20 }} />
          {!isMobile && <span>0344798392</span>}
        </Link>
        <Link className='flex gap-1 items-center' href={LINK_CONTACT.FaceBook} target='_blank'>
          <FaFacebook className='text-blue-700' style={{ fontSize: 20 }} />
          {!isMobile && <span>Thầy Hồng Toán</span>}
        </Link>
      </div>
    )
  }

  const renderMenu = () => {
    return (
      <div className='flex md:flex-row flex-col gap-3 md:items-center'>
        <Link className='flex items-center gap-2' href={'/'}>
          {isMobile && <AiFillHome />}

          <span>{translate('header.home')}</span>
        </Link>
        <Link className='flex items-center gap-2' href={'/contact'}>
          {isMobile && <AiFillContacts />}
          <span>{translate('header.contact')}</span>
        </Link>
        <Link className='flex items-center gap-2' href={'/info'}>
          {isMobile && <IoIosInformationCircleOutline />}
          <span>{translate('header.info')}</span>
        </Link>
      </div>
    )
  }

  if (isMobile) {
    return (
      <div className='flex gap-2 flex-1 items-center justify-end'>
        {renderContact()}
        <FiAlignJustify
          className='text-2xl cursor-pointer'
          onClick={() => {
            openDrawer({
              children: renderMenu(),
              placement: 'right',
            })
          }}
        />
      </div>
    )
  }

  return (
    <div className='flex flex-1 gap-3 items-center justify-between'>
      {renderMenu()}
      {renderContact()}
    </div>
  )
}

export default Nav
