import { ResolvingMetadata } from 'next'
import React from 'react'

import AttendanceAdminScreen from './client'

import { generateMetaBase } from '@/utils/serverNext'

export async function generateMetadata(_: any, parent: ResolvingMetadata) {
  const dataBase = await parent

  const metaData = generateMetaBase({
    dataBase,
    title: 'Thày Hồng Toán | Quản lý điểm danh',
  })

  return metaData
}

const AttendanceAdminPage = () => {
  return <AttendanceAdminScreen />
}

export default AttendanceAdminPage
