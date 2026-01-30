'use client'
import React from 'react'

import useLanguage from '@/hooks/useLanguage'
import useGetClass from '@/hooks/react-query/useGetClass'
import { IClass } from '@/services/API/Class/type'
import { ITeacher } from '@/services/API/Teacher/type'
import { cn } from '@/utils/tailwind'
import { MyTable } from '@/components'

const ClassAdminScreen = () => {
  const { translate } = useLanguage()
  const { data: classes = [], isLoading, isError, fetchNextPage, hasNextPage } = useGetClass({})

  const columns = [
    { key: 'name', label: translate('admin.name') },
    { key: 'teacher', label: translate('admin.teacher') },
    { key: 'startTime', label: translate('admin.startTime') },
    { key: 'endTime', label: translate('admin.endTime') },
  ]

  const renderCell = React.useCallback((item: IClass, columnKey: string) => {
    switch (columnKey) {
      case 'name':
        return item.name
      case 'teacher':
        return (item.idTeacher as ITeacher)?.name || 'No Teacher'
      case 'startTime':
        return item.startTime ? new Date(item.startTime).toLocaleTimeString() : 'N/A'
      case 'endTime':
        return item.endTime ? new Date(item.endTime).toLocaleTimeString() : 'N/A'
      default:
        return null
    }
  }, [])

  if (isError) return <div className='text-danger text-center'>{translate('errors.serverError')}</div>

  return (
    <div className={cn('flex flex-col gap-6 w-full py-8')}>
      <div className={cn('flex justify-between items-center')}>
        <h1 className={cn('text-3xl font-bold')}>{translate('admin.classManagement')}</h1>
      </div>

      <MyTable
        ariaLabel='Class Table'
        columns={columns}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
        items={classes}
        renderCell={renderCell}
        onLoadMore={fetchNextPage}
      />
    </div>
  )
}

export default ClassAdminScreen
