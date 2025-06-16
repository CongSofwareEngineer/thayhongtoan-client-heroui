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
    <div className='flex h-full md:flex-row flex-col gap-3 items-center justify-center '>
      {!isMobile && (
        <div className='flex flex-1 items-center justify-center h-full'>
          <MyImage alt='logo' className='!max-w-[300px] !h-auto' src={images.icons.avatarDefault} />
        </div>
      )}

      <div className='flex flex-1 items-center justify-center h-full'>
        <MyForm className='flex flex-1 flex-col overflow-auto gap-3' validationErrors={errors} onSubmit={onSubmit}>
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

          <MyButton className='w-full' type='submit'>
            Submit
          </MyButton>
        </MyForm>
      </div>
    </div>
  )
}

export default ContactScreen
