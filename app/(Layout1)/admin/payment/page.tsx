import { ResolvingMetadata } from 'next'
import React from 'react'

import PaymentAdminScreen from './client'

import { generateMetaBase } from '@/utils/serverNext'

export async function generateMetadata(_: any, parent: ResolvingMetadata) {
  const dataBase = await parent

  const metaData = generateMetaBase({
    dataBase,
    title: 'Thày Hồng Toán | Quản lý thanh toán',
  })

  return metaData
}

const PaymentAdminPage = () => {
  return <PaymentAdminScreen />
}

export default PaymentAdminPage
