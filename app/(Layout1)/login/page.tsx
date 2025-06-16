import React from 'react'
import { ResolvingMetadata } from 'next'

import LoginScreen from './client'

import { generateMetaBase } from '@/utils/serverNext'
export async function generateMetadata(_: any, parent: ResolvingMetadata) {
  const dataBase = await parent

  const metaData = generateMetaBase({
    dataBase,
    title: 'Thày Hồng Toán | Đăng nhập',
  })

  return metaData
}
const LoginPage = () => {
  return <LoginScreen />
}

export default LoginPage
