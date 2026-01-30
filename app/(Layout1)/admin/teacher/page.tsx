import { ResolvingMetadata } from 'next'
import React from 'react'

import TeacherAdminScreen from './client'

import { generateMetaBase } from '@/utils/serverNext'

export async function generateMetadata(_: any, parent: ResolvingMetadata) {
  const dataBase = await parent

  const metaData = generateMetaBase({
    dataBase,
    title: 'Thày Hồng Toán | Quản lý giáo viên',
  })

  return metaData
}

const TeacherAdminPage = () => {
  return <TeacherAdminScreen />
}

export default TeacherAdminPage
