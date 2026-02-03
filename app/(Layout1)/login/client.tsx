'use client'
import { ValidationErrors } from '@react-types/shared'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { FormLogin } from './type'

import MyButton from '@/components/MyButton'
import MyForm from '@/components/MyForm'
import MyInput from '@/components/MyInput'
import useLanguage from '@/hooks/useLanguage'
import TeacherAPI from '@/services/API/Teacher'
import useUser from '@/hooks/useUser'
import { showNotificationError } from '@/utils/notification'

const LoginScreen = () => {
  const { translate } = useLanguage()
  const { setUser } = useUser()
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormLogin>({})
  const [errors, setErrors] = useState<ValidationErrors>({})

  const onSubmit = async (data: FormLogin) => {
    try {
      setIsLoading(true)
      console.log({ data })
      const res = await TeacherAPI.login(data as any)

      console.log({ res })
      if (res?.data) {
        setUser(res.data)
        router.push('/home')
      } else {
        showNotificationError(translate('warning.errorLogin'))
      }
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex w-full m-auto h-full md:flex-row flex-col gap-3 items-center justify-center '>
      <div className='flex  flex-1 items-center justify-center h-full'>
        <MyForm
          className='bg-white py-5 px-5 rounded-xl flex max-w-[500px] flex-1 flex-col overflow-auto gap-6'
          validationErrors={errors}
          onSubmit={onSubmit}
        >
          <p className='text-title text-center w-full'>{translate('login.login')}</p>
          <MyInput
            isRequired
            disabled={isLoading}
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return translate('errors.empty')
              }

              return translate('errors.empty')
            }}
            label={'SDT'}
            name='sdt'
            placeholder={'SDT'}
            value={formData?.sdt}
            onChange={(e) => setFormData({ ...formData, sdt: e.target.value })}
          />
          <MyInput
            isRequired
            disabled={isLoading}
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return translate('errors.empty')
              }

              return errors?.sdt
            }}
            label={translate('login.password')}
            name='password'
            placeholder={translate('placeholder.enterPassWord')}
            type='password'
            value={formData?.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />

          <MyButton className='w-full' isLoading={isLoading} type='submit'>
            {translate('login.login')}
          </MyButton>
        </MyForm>
      </div>
    </div>
  )
}

export default LoginScreen
