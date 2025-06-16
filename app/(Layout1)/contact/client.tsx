'use client'
import React, { useState } from 'react'
import { ValidationErrors } from '@react-types/shared'

import { FormContact } from './type'

import useMedia from '@/hooks/useMedia'
import MyImage from '@/components/MyImage'
import { images } from '@/config/images'
import MyForm from '@/components/MyForm'
import useLanguage from '@/hooks/useLanguage'
import MyButton from '@/components/MyButton'
import MyInput from '@/components/MyInput'
import MyInputArea from '@/components/MyInputArea'

const ContactScreen = () => {
  const { isMobile } = useMedia()
  const { translate } = useLanguage()

  const [formData, setFormData] = useState<FormContact>()
  const [errors, setErrors] = useState<ValidationErrors>({})

  const onSubmit = (data: FormContact) => {
    console.log({ data })
    setErrors({
      sdt: 'Số điện tyhoaij sai',
    })

    return
  }

  return (
    <div className='flex w-full h-full md:flex-row flex-col gap-3 items-center justify-center '>
      {!isMobile && (
        <div className='flex flex-1 w-full items-center justify-center h-full'>
          <div className='flex relative w-full overflow-hidden max-w-[300px]'>
            <MyImage alt='logo' className='!w-full  !h-auto' src={images.logo} />
          </div>
        </div>
      )}

      <div className='flex  flex-1 w-full  md:items-start md:justify-start items-center justify-center h-full'>
        <MyForm
          className='bg-white max-w-[500px]  w-full  py-5 px-5 rounded-xl flex flex-1 flex-col overflow-auto gap-10'
          validationErrors={errors}
          onSubmit={onSubmit}
        >
          <div className='w-full flex flex-col gap-6'>
            <p className='w-full text-title text-center'>{translate('header.contact')}</p>
            <MyInput
              isRequired
              errorMessage={({ validationDetails }) => {
                if (validationDetails.valueMissing) {
                  return translate('errors.empty')
                }

                return errors?.username
              }}
              label={translate('name')}
              name='username'
              placeholder={translate('placeholder.enterName')}
              value={formData?.username}
            />
            <MyInput
              isRequired
              errorMessage={({ validationDetails }) => {
                if (validationDetails.valueMissing) {
                  return translate('errors.empty')
                }

                return errors?.sdt
              }}
              label={translate('name')}
              name='sdt'
              placeholder={translate('placeholder.enterNumberPhone')}
              value={formData?.sdt}
            />
            <MyInputArea
              errorMessage={({ validationDetails }) => {
                if (validationDetails.valueMissing) {
                  return translate('errors.empty')
                }
              }}
              label={translate('name')}
              name='message'
              placeholder={translate('placeholder.enterContent')}
              value={formData?.message}
            />
          </div>

          <MyButton className='w-full' type='submit'>
            Submit
          </MyButton>
        </MyForm>
      </div>
    </div>
  )
}

export default ContactScreen
