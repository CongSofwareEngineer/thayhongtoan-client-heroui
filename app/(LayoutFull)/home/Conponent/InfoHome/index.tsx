import Image from 'next/image'
import React from 'react'

import { images } from '@/config/images'

const InfoHome = () => {
  const renderItem = (image: string, title: string, des: string) => {
    return (
      <div className='flex gap-4 flex-1 items-center justify-center ' data-aos='zoom-in'>
        <div className='w-14 h-14'>
          <Image fill alt={`info-home-${title}`} className='!relative !h-auto' src={image} />
        </div>
        <div className='flex-1 justify-start items-start'>
          <div className='uppercase font-semibold text-medium'>{title}</div>
          <div>{des}</div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full flex flex-col md:p-12 p-5 md:flex-row gap-8 md:gap-7 justify-between md:mt-8'>
      {renderItem(images.icons.iconResponsibility, 'TINH THẦN VÀ TRÁCH NHIỆM', 'Mỗi sản phẩm là biểu hiện trí tuệ và công sức bỏ ra.')}
      {renderItem(images.icons.iconShield, 'CAM KẾT CHẤT LƯỢNG', 'Sản phẩm chúng tôi 100% chất lượng và tự nhiên.')}
      {renderItem(images.icons.iconSupport, 'CHĂM SÓC KHÁCH HÀNG 24/7', 'Hỗ trợ và giải đáp thắc mắc các thông tin 24/7.')}
    </div>
  )
}

export default InfoHome
