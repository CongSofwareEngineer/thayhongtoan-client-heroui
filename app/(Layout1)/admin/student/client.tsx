'use client'
import React from 'react'

import useLanguage from '@/hooks/useLanguage'
import useGetStudent from '@/hooks/react-query/useGetStudent'
import { IStudent } from '@/services/API/Student/type'
import { IClass } from '@/services/API/Class/type'
import { IRegister } from '@/services/API/Register/type'
import { cn } from '@/utils/tailwind'
import { MyTable } from '@/components'

const StudentAdminScreen = () => {
  const { translate } = useLanguage()
  const { data: students = [], isLoading, isError, fetchNextPage, hasNextPage } = useGetStudent({})

  const columns = [
    { key: 'name', label: translate('admin.name') },
    { key: 'email', label: translate('admin.email') },
    { key: 'class', label: translate('admin.class') },
    { key: 'id', label: translate('admin.id') },
  ]

  const renderCell = React.useCallback((item: IStudent, columnKey: string) => {
    switch (columnKey) {
      case 'name':
        return item.name
      case 'email':
        return (item.idRegister as IRegister)?.gmail || 'No Email'
      case 'class':
        return (item.idClass as IClass)?.name || 'No Class'
      case 'id':
        return item._id
      default:
        return null
    }
  }, [])

  if (isError) return <div className='text-danger text-center'>{translate('errors.serverError')}</div>

  return (
    <div className={cn('flex flex-col gap-6 w-full py-8')}>
      <div className={cn('flex justify-between items-center')}>
        <h1 className={cn('text-3xl font-bold')}>{translate('admin.studentManagement')}</h1>
      </div>

      <MyTable
        ariaLabel='Student Table'
        columns={columns}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
        items={students}
        renderCell={renderCell}
        onLoadMore={fetchNextPage}
      />
    </div>
  )
}

export default StudentAdminScreen
