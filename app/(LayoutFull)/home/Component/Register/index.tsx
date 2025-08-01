import { useState } from 'react'

import { FormData } from './type'

import MyButton from '@/components/MyButton'
import MyForm from '@/components/MyForm'
import MyInput from '@/components/MyInput'
import MyInputNumber from '@/components/MyInputNumber'
import useCheckForm from '@/hooks/useCheckForm'
import useLanguage from '@/hooks/useLanguage'
import { ErrorForm } from '@/types'
import { cloneData } from '@/utils/functions'

const Register = () => {
  const [formData, setFormData] = useState<FormData>()
  const [errors, setErrors] = useState<ErrorForm<FormData>>()
  const [loading, setLoading] = useState(false)

  const { translate } = useLanguage()
  const { checkEmail, checkNumberPhone } = useCheckForm()

  const onChangeForm = (vale: FormData) => {
    const errorClone = cloneData(errors || {}) as ErrorForm<FormData>

    if (typeof vale?.email !== 'undefined') {
      if (vale?.email) {
        const error = checkEmail(vale?.email)

        if (error) {
          errorClone.email = error
        } else {
          delete errorClone.email
        }
      } else {
        delete errorClone.email
      }
    }

    if (typeof vale?.sdt !== 'undefined') {
      const error = checkNumberPhone(vale?.sdt)

      if (error) {
        errorClone.sdt = error
      } else {
        delete errorClone.sdt
      }
    }

    if (typeof vale?.age !== 'undefined') {
      if (!vale?.age) {
        errorClone.age = translate('errors.empty')
      } else {
        delete errorClone.age
      }
    }

    if (typeof vale?.name !== 'undefined') {
      if (!vale?.name) {
        errorClone.name = translate('errors.empty')
      } else {
        delete errorClone.name
      }
    }

    setErrors(errorClone)
    setFormData((prev) => ({ ...prev, ...vale }))
  }

  const handleSubmit = async () => {
    if (Object.keys(errors || {}).length > 0) {
      return
    }
    if (!formData?.name || !formData?.sdt || !formData?.age) {
      setErrors({
        name: translate('errors.empty'),
        sdt: translate('errors.empty'),
        age: translate('errors.empty'),
      })

      return
    }
    setLoading(true)
    setLoading(false)
    console.log({ formData })
  }

  return (
    <div className='md:px-12 px-5 w-full flex   items-center justify-center '>
      <div className='w-full bg-white  p-5 rounded-2xl max-w-[800px] h-full flex flex-col items-center justify-center'>
        <p className='text-title font-bold mb-4'>{translate('register.register')}</p>
        <MyForm className='w-full flex flex-col gap-3' validationErrors={errors}>
          <MyInput
            isRequired
            errorMessage={() => errors?.name}
            isInvalid={!!errors?.name}
            label={translate('register.name')}
            placeholder={translate('register.name')}
            value={formData?.name}
            onChange={(e) => onChangeForm({ name: e.target.value })}
          />
          <MyInput
            isRequired
            errorMessage={() => errors?.sdt}
            isInvalid={!!errors?.sdt}
            label={translate('register.phone')}
            maxLength={12}
            placeholder={translate('placeholder.enterNumberPhone')}
            value={formData?.sdt}
            onChange={(e) => onChangeForm({ sdt: e.target.value })}
          />
          <MyInputNumber
            isRequired
            errorMessage={() => errors?.age}
            isInvalid={!!errors?.age}
            label={translate('register.age')}
            maxLength={2}
            minValue={1}
            placeholder={translate('placeholder.enterAge')}
            step={1}
            value={formData?.age}
            onChange={(e) => onChangeForm({ age: e })}
          />
          <MyInput
            errorMessage={() => errors?.email}
            label={translate('register.email')}
            placeholder={translate('placeholder.enterEmail')}
            type='email'
            value={formData?.email}
            onChange={(e) => onChangeForm({ email: e.target.value })}
          />
          <MyButton className='w-full mt-6' disabled={Object.keys(errors || {}).length > 0} isLoading={loading} type='submit' onClick={handleSubmit}>
            {translate('common.send')}
          </MyButton>
        </MyForm>
      </div>
    </div>
  )
}

export default Register
