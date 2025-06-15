'use client'
import { Button } from '@heroui/button'
import { NumberInput } from '@heroui/number-input'
import { Input } from '@heroui/input'
import { FormEvent, useEffect, useState } from 'react'
import { Form } from '@heroui/form'
import { ValidationError } from '@react-types/shared'

import useLanguage from '@/hooks/useLanguage'
import useModal from '@/hooks/useModal'
import useClient from '@/hooks/useHydrate'
import useModal2 from '@/hooks/useModal2'
import useDrawer from '@/hooks/useDrawer'
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
export default function Home() {
  const { closeDrawer, openDrawer } = useDrawer()
  const { lang, translate } = useLanguage()
  const { openModal, modal, closeModal } = useModal()
  const { openModal: openModal2, modal2, closeModal: closeModal2 } = useModal2()
  const isClient = useClient()

  const [formData, setformData] = useState<Form>({
    name: 'diencon',
  })
  const [errors, seterrors] = useState<Record<string, ValidationError>>({})

  console.log({ modal2 })

  // useEffect(() => {
  //   console.log({ lang })
  //   setLanguage(LANGUAGE_SUPPORT.JP)
  // }, [])

  useEffect(() => {
    if (isClient) {
      console.log({ useEffect: lang })
    }
  }, [isClient])

  const setSubmitted = () => {}

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))

    console.log({ data })
  }

  return (
    <section className='w-full flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <Form validationErrors={errors} onReset={() => setSubmitted()} onSubmit={onSubmit}>
        <Input
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return 'Please enter your name'
            }

            return errors.name
          }}
          label='Name'
          labelPlacement='outside'
          name='name'
          placeholder='Enter your name'
          value={formData?.name}
          onChange={(e) => setformData({ ...formData, name: e.target.value })}
        />
        <Button className='w-full' color='secondary' type='submit'>
          submit form
        </Button>
      </Form>

      <Button
        className='w-full'
        color='secondary'
        onPress={() => {
          openModal2({
            showBtnClose: false,
            body: (
              <div className='min-h-[100px]'>
                <div>ashdgahsfd</div>
                <Button onPress={() => closeModal()}>close</Button>
              </div>
            ),
          })
        }}
      >
        {translate('sendNFT.titlePending')}
      </Button>
      <Button
        className='w-full'
        color='secondary'
        onPress={() => {
          openModal({
            showBtnClose: false,
            children: (
              <div className='min-h-[100px]'>
                <div>ashdgahsfd</div>
                <Button onPress={() => closeModal()}>close</Button>
              </div>
            ),
          })
        }}
      >
        {translate('sendNFT.titlePending')}
      </Button>

      <Button
        className='w-full'
        color='secondary'
        onPress={() => {
          openDrawer({
            placement: 'right',
            children: (
              <div className='min-h-[100px]'>
                <div>ashdgahsfd</div>
                <Button onPress={() => closeModal()}>close</Button>
              </div>
            ),
          })
        }}
      >
        {translate('sendNFT.titlePending')}
      </Button>
      <Input maxLength={10} />
      <MyImage alt='d' className='!w-10 !h-10' src={images.icons.avatarDefault} />
      <MyImage alt='d' className='!w-10 !h-10' src={images.icons.avatarDefault} />
      <MyImage alt='d' className='!w-10 !h-10' src={images.icons.avatarDefault} />
      <MyImage alt='d' className='!w-10 !h-10' src={images.icons.avatarDefault} />
      <MyImage alt='d' className='!w-10 !h-10' src={images.icons.avatarDefault} />
      <MyImage alt='d' className='!w-10 !h-10' src={images.icons.avatarDefault} />
      <MyImage alt='d' className='!w-10 !h-10' src={images.icons.avatarDefault} />
      <MyImage alt='d' className='!w-10 !h-10' src={images.icons.avatarDefault} />
      <MyImage alt='d' className='!w-10 !h-10' src={images.icons.avatarDefault} />
      <MyImage alt='d' className='!w-10 !h-10' src={images.icons.avatarDefault} />
      <MyImage alt='d' className='!w-10 !h-10' src={images.icons.avatarDefault} />
      <MyImage alt='d' className='!w-10 !h-10' src={images.icons.avatarDefault} />
      <MyImage alt='d' className='!w-10 !h-10' src={images.icons.avatarDefault} />
      <MyImage alt='d' className='!w-10 !h-10' src={images.icons.avatarDefault} />
      <MyImage alt='d' className='!w-10 !h-10' src={images.icons.avatarDefault} />
      <MyImage alt='d' className='!w-10 !h-10' src={images.icons.avatarDefault} />
      <NumberInput className='max-w-xs' errorMessage='Please enter a number' placeholder='Enter the amount' step={0} />
    </section>
  )
}
