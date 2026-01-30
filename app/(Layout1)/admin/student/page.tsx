import { ResolvingMetadata } from 'next'

import StudentAdminScreen from './client'

import { generateMetaBase } from '@/utils/serverNext'

export async function generateMetadata(_: any, parent: ResolvingMetadata) {
  const dataBase = await parent

  const metaData = generateMetaBase({
    dataBase,
    title: 'Thày Hồng Toán | Quản lý học sinh',
  })

  return metaData
}

const StudentAdminPage = () => {
  return <StudentAdminScreen />
}

export default StudentAdminPage
