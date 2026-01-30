import React from 'react'
import { ResolvingMetadata } from 'next'

import RegisterAdminScreen from './client'

import { generateMetaBase } from '@/utils/serverNext'

export async function generateMetadata(_: any, parent: ResolvingMetadata) {
  const dataBase = await parent

  const metaData = generateMetaBase({
    dataBase,
    title: 'Thày Hồng Toán | Quản lý đăng ký',
  })

  return metaData
}

const RegisterAdminPage = () => {
  return <RegisterAdminScreen />
}

export default RegisterAdminPage
