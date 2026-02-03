import Link from 'next/link'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/dropdown'
import { useRouter } from 'next/navigation'

import useDrawer from '@/hooks/useDrawer'
import useLanguage from '@/hooks/useLanguage'
import useMedia from '@/hooks/useMedia'
import useUser from '@/hooks/useUser'
import MyDropdown from '@/components/MyDropdown'
import TeacherAPI from '@/services/API/Teacher'
import MyButton from '@/components/MyButton'
import { IconRegister } from '@/components/Icons/IconRegister'
import { HomeIcon } from '@/components/Icons/Home'
import { CheckBadgeIcon } from '@/components/Icons/CheckBadge'
import { PaymentIcon } from '@/components/Icons/Payment'
import { UserCircleIcon } from '@/components/Icons/UserCircle'
import { MenuIcon } from '@/components/Icons/Menu'
import { ClassIcon } from '@/components/Icons/Class'
import { ContactIcon } from '@/components/Icons/Contact'
import { InfoIcon } from '@/components/Icons/Info'
import { CopyIcon } from '@/components/Icons/Copy'

const Nav = () => {
  const { isMobile } = useMedia()
  const { translate } = useLanguage()
  const { openDrawer } = useDrawer()
  const { user, setUser } = useUser()
  const router = useRouter()

  const adminLinks = [
    { key: 'attendance', label: 'header.admin.attendance', href: '/admin/attendance', icon: <CheckBadgeIcon /> },
    { key: 'class', label: 'header.admin.class', href: '/class', icon: <HomeIcon /> },
    { key: 'payment', label: 'header.admin.payment', href: '/admin/payment', icon: <PaymentIcon /> },
    { key: 'register', label: 'header.admin.register', href: '/admin/register', icon: <IconRegister /> },
    { key: 'student', label: 'header.admin.student', href: '/admin/student', icon: <UserCircleIcon /> },
    { key: 'teacher', label: 'header.admin.teacher', href: '/admin/teacher', icon: <UserCircleIcon /> },
  ]

  const handleLogout = () => {
    setUser(null)
    TeacherAPI.logout()
  }

  const renderContact = () => {
    // return (
    //   <div className='flex gap-3 items-center'>
    //     <Link className='flex gap-1 items-center' href={LINK_CONTACT.Zalo} target='_blank'>
    //       <MyImage fill alt='icon zalo' className='!w-6  !h-6 !relative' src={images.icons.iconZalo} />
    //       {!isMobile && <span>0344798392</span>}
    //     </Link>
    //     <Link className='flex gap-1 items-center' href={LINK_CONTACT.SDT} target='_blank'>
    //       <FaSquarePhoneFlip className='text-blue-700' style={{ fontSize: 20 }} />
    //       {!isMobile && <span>0344798392</span>}
    //     </Link>
    //     <Link className='flex gap-1 items-center' href={LINK_CONTACT.FaceBook} target='_blank'>
    //       <FaFacebook className='text-blue-700' style={{ fontSize: 20 }} />
    //       {!isMobile && <span>Thầy Hồng Toán</span>}
    //     </Link>
    //   </div>
    // )
    return <MyButton onClick={() => router.push('/login')}>{translate('login.login')}</MyButton>
  }

  const renderUser = () => {
    return (
      // <div className='flex gap-3 items-center'>
      //   <div>{user?.name}</div>
      // </div>
      <MyDropdown
        options={[
          // { label: 'header.admin.profile', key: 'profile' },
          { label: <div onClick={handleLogout}>{translate('common.logout')}</div>, key: 'logout' },
        ]}
      >
        <div className='flex gap-3 items-center cursor-pointer'>
          <div>{user?.name}</div>
          <MenuIcon />
        </div>
      </MyDropdown>
    )
  }

  const renderMenu = () => {
    return (
      <div className='flex md:flex-row flex-col gap-3 md:items-center'>
        <Link className='flex items-center gap-2' href={'/'}>
          {isMobile && <HomeIcon />}
          <span>{translate('header.home')}</span>
        </Link>
        <Link className='flex items-center gap-2' href={'/class'}>
          {isMobile && <ClassIcon />}
          <span>{translate('header.admin.class')}</span>
        </Link>
        <Link className='flex items-center gap-2' href={'/contact'}>
          {isMobile && <ContactIcon />}
          <span>{translate('header.contact')}</span>
        </Link>
        <Link className='flex items-center gap-2' href={'/info'}>
          {isMobile && <InfoIcon />}
          <span>{translate('header.info')}</span>
        </Link>
        {user && (
          <>
            {isMobile ? (
              <div className='flex flex-col gap-2 mt-2 pt-2 border-t'>
                <p className='text-tiny font-bold text-default-400 uppercase'>{translate('header.admin.title')}</p>
                {adminLinks.map((link) => (
                  <Link key={link.key} className='flex items-center gap-2 pl-2' href={link.href}>
                    {link.icon}
                    <span>{translate(link.label as any)}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <Dropdown>
                <DropdownTrigger>
                  <div className='flex items-center gap-2 cursor-pointer hover:text-primary transition-colors'>
                    <CopyIcon />
                    <span>Admin</span>
                  </div>
                </DropdownTrigger>
                <DropdownMenu aria-label='Admin Actions'>
                  {adminLinks.map((link) => (
                    <DropdownItem key={link.key} startContent={link.icon}>
                      <Link href={link.href}>{translate(link.label as any)}</Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            )}
          </>
        )}
      </div>
    )
  }

  if (isMobile) {
    return (
      <div className='flex gap-2 flex-1 items-center justify-end'>
        {renderContact()}
        <MenuIcon
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
      {user ? renderUser() : renderContact()}
    </div>
  )
}

export default Nav
