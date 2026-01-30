import { ResolvingMetadata } from 'next'
import React from 'react'

import ClassAdminScreen from './client'

import { generateMetaBase } from '@/utils/serverNext'

export async function generateMetadata(_: any, parent: ResolvingMetadata) {
  const dataBase = await parent

  const metaData = generateMetaBase({
    dataBase,
    title: 'Thày Hồng Toán | Quản lý lớp học',
  })

  return metaData
}

const ClassAdminPage = () => {
  return <ClassAdminScreen />
}

export default ClassAdminPage
