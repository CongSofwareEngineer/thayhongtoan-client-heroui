'use client'
import React, { useState } from 'react'
import { ValidationErrors } from '@react-types/shared'

import { FormLogin } from './type'

import MyButton from '@/components/MyButton'
import MyForm from '@/components/MyForm'
import MyInput from '@/components/MyInput'
import useLanguage from '@/hooks/useLanguage'
import useMedia from '@/hooks/useMedia'
import MyCheckbox from '@/components/MyCheckbox'

const LoginScreen = () => {
  const { isMobile } = useMedia()
  const { translate } = useLanguage()
  const [formData, setFormData] = useState<FormLogin>({})
  const [errors, setErrors] = useState<ValidationErrors>({})

  const onSubmit = (data: FormLogin) => {
    console.log({ data })
  }

  return (
    <div className='flex w-full h-full md:flex-row flex-col gap-3 items-center justify-center '>
      <div className='flex  flex-1 items-center justify-center h-full'>
        <MyForm
          className='bg-white py-5 px-5 rounded-xl flex max-w-[500px] flex-1 flex-col overflow-auto gap-6'
          validationErrors={errors}
          onSubmit={onSubmit}
        >
          <p className='text-title text-center w-full'>{translate('login.login')}</p>
          <MyInput
            isRequired
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return translate('errors.empty')
              }

              return translate('errors.empty')
            }}
            label={translate('name')}
            name='username'
            placeholder={translate('placeholder.enterName')}
            value={formData?.sdt}
            onChange={(e) => setFormData({ ...formData, sdt: e.target.value })}
          />
          <MyInput
            isRequired
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return translate('errors.empty')
              }

              return errors?.sdt
            }}
            label={translate('login.password')}
            name='sdt'
            placeholder={translate('placeholder.enterPassWord')}
            type='password'
            value={formData?.password}
          />
          <MyCheckbox>{translate('login.saveLogin')}</MyCheckbox>

          <MyButton className='w-full' type='submit'>
            Submit
          </MyButton>
        </MyForm>
      </div>
    </div>
  )
}

export default LoginScreen
