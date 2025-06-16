'use client'
import { FormEvent } from 'react'
import { Button } from '@heroui/button'

import useLanguage from '@/hooks/useLanguage'
import useModal from '@/hooks/useModal'
import useModal2 from '@/hooks/useModal2'
import useDrawer from '@/hooks/useDrawer'
import MyImage from '@/components/MyImage'
import { images } from '@/config/images'
import MySelect, { OptionSelect } from '@/components/MySelect'
import MyDropdown, { OptionDropdown } from '@/components'

interface Form {
  name?: string
  age?: number
}

interface FormError {
  name?: string
  age?: string
}
function HomeScreen() {
  const { closeDrawer, openDrawer } = useDrawer()
  const { lang, translate } = useLanguage()
  const { openModal, modal, closeModal } = useModal()
  const { openModal: openModal2, modal2, closeModal: closeModal2 } = useModal2()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))

    console.log({ data })
  }

  const renderModal = () => {
    return (
      <Button
        onPress={() => {
          openModal({
            children: <div>Modal</div>,
          })
        }}
      >
        <span>Open Modal</span>
      </Button>
    )
  }

  const renderModal2 = () => {
    return (
      <Button
        onPress={() => {
          openModal2({
            content: <div>Modal</div>,
          })
        }}
      >
        <span>Open Modal2</span>
      </Button>
    )
  }

  const renderSelect = () => {
    const item: OptionSelect = [
      {
        label: 'diencon',
        key: 'diencon',
      },
      {
        label: 'diencon2',
        key: 'diencon2',
      },
    ]

    return <MySelect className='w-[200px]' defaultSelectedKeys={['diencon2']} label='Option' options={item} value={'diencon2'} />
  }

  const renderDropdown = () => {
    const item: OptionDropdown = [
      {
        label: 'diencon',
        key: 'diencon',
      },
      {
        label: 'diencon2',
        key: 'diencon2',
      },
    ]

    return (
      <MyDropdown className='w-[200px]' options={item}>
        <div>MyDropdown</div>
      </MyDropdown>
    )
  }

  return (
    <section className='w-full h-full  flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      {renderDropdown()}
      {renderModal()}
      {renderModal2()}
      {renderSelect()}
      <div className='w-full min-h-[calc(100vh-56px)] max-h-[calc(100vh-56px)] relative overflow-hidden'>
        <div className='absolute-center w-full h-full flex items-center justify-center '>
          <MyImage alt='banner' className='!min-w-full !max-w-max !min-h-full !h-auto' src={images.icons.avatarDefault} />
        </div>
      </div>
    </section>
  )
}

export default HomeScreen
