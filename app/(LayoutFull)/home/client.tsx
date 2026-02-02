'use client'

import { useRouter } from 'next/navigation'

import InfoHome from './Component/InfoHome'
import SocialMedia from './Component/SocialMedia'

import { MyButton } from '@/components'
import MyImage from '@/components/MyImage'
import { images } from '@/config/images'
import useLanguage from '@/hooks/useLanguage'

function HomeScreen() {
  const { translate } = useLanguage()
  const router = useRouter()

  return (
    <div className='w-full h-full gap-6 flex flex-col items-center justify-center '>
      <div className='w-full max-h-[calc(100vh-56px)] min-h-[calc(100vh-56px)] relative overflow-hidden'>
        <div className='absolute-center flex justify-center items-center w-full h-full'>
          <MyImage noAnimation alt='banner' className='object-cover !min-w-full !min-h-full  ' src={images.home.banner} />
        </div>
      </div>
      <InfoHome />
      <SocialMedia />
      <div className='w-full flex justify-center py-6'>
        <MyButton
          className='font-bold text-lg px-8 py-6 rounded-full shadow-lg bg-gradient-to-r from-pink-500 to-violet-500 text-white animate-bounce'
          size='lg'
          onPress={() => router.push('/register?idClass=697ece7d7e900925609a2acb')}
        >
          {translate('register.registerNow')}
        </MyButton>
      </div>
      <div className='w-full py-6  gap-5 max-w-[1200px] md:px-12 px-5 flex md:flex-row flex-col items-center justify-center'>
        <div className='flex flex-1 w-full items-center justify-center  '>
          <MyImage alt='banner' src={images.home.banner2} />
        </div>
        <div className='flex flex-col flex-1 w-full items-start gap-2 justify-center'>
          <div className='text-medium'>
            Toán Soroban là phương pháp rèn luyện tư duy tính nhẩm siêu tốc thông qua bàn tính Nhật Bản – một công cụ đơn giản nhưng đầy mạnh mẽ giúp
            trẻ phát triển tư duy logic, trí nhớ, khả năng tập trung và đặc biệt là tốc độ tính toán vượt trội.
          </div>
          <div className='text-medium'>Dưới sự hướng dẫn tận tâm và chuyên nghiệp của thầy Hồng, các bé sẽ được:</div>
          <ul className='list-disc pl-5'>
            <li className='text-medium'>Làm quen với bàn tính Soroban truyền thống.</li>
            <li className='text-medium'>Luyện tập cách hình dung số trên bàn tính bằng trí não (trí tuệ ảo). </li>
            <li className='text-medium'>Thực hành tính nhẩm cộng, trừ, nhân, chia nhanh chóng và chính xác. </li>
            <li className='text-medium'>Phát triển đồng thời hai bán cầu não thông qua trò chơi và bài tập thực tế. </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
