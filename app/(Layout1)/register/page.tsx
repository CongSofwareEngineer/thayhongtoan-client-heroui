import { ResolvingMetadata } from 'next'
import React from 'react'

import RegisterPageClient from './client'

import { generateMetaBase } from '@/utils/serverNext'

export async function generateMetadata(_: any, parent: ResolvingMetadata) {
  const dataBase = await parent

  const metaData = generateMetaBase({
    dataBase,
    title: 'Thày Hồng Toán | Đăng ký học',
  })

  return metaData
}

const RegisterPage = () => {
  return <RegisterPageClient />
}

export default RegisterPage
