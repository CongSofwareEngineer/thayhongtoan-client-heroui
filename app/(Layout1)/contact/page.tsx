import { ResolvingMetadata } from 'next'

import ContactScreen from './client'

import { generateMetaBase } from '@/utils/serverNext'
export async function generateMetadata(_: any, parent: ResolvingMetadata) {
  const dataBase = await parent

  const metaData = generateMetaBase({
    dataBase,
    title: 'Thày Hồng Toán | Liên Hệ',
  })

  return metaData
}
const ContactPage = () => {
  return <ContactScreen />
}

export default ContactPage
