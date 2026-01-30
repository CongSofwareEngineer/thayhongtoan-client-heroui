'use client'
import React from 'react'

import useLanguage from '@/hooks/useLanguage'
import useGetRegister from '@/hooks/react-query/useGetRegister'
import { IRegister } from '@/services/API/Register/type'
import { cn } from '@/utils/tailwind'
import { MyTable } from '@/components'

const RegisterAdminScreen = () => {
  const { translate } = useLanguage()
  const { data: registers = [], isLoading, isError, fetchNextPage, hasNextPage } = useGetRegister({})

  const columns = [
    { key: 'name', label: translate('admin.name') },
    { key: 'email', label: translate('admin.email') },
    { key: 'phone', label: translate('admin.phone') },
    { key: 'address', label: translate('admin.address') },
  ]

  const renderCell = React.useCallback((item: IRegister, columnKey: string) => {
    switch (columnKey) {
      case 'name':
        return item.nameStudent
      case 'email':
        return item.gmail
      case 'phone':
        return item.phoneNumber
      case 'address':
        return item.address
      default:
        return null
    }
  }, [])

  if (isError) return <div className='text-danger text-center'>{translate('errors.serverError')}</div>

  return (
    <div className={cn('flex flex-col gap-6 w-full py-8')}>
      <div className={cn('flex justify-between items-center')}>
        <h1 className={cn('text-3xl font-bold')}>{translate('admin.registerManagement')}</h1>
      </div>

      <MyTable
        ariaLabel='Register Table'
        columns={columns}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
        items={registers}
        renderCell={renderCell}
        onLoadMore={fetchNextPage}
      />
    </div>
  )
}

export default RegisterAdminScreen
