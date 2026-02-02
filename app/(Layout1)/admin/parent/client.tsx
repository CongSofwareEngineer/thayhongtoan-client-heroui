'use client'
import React from 'react'
import { Tooltip } from '@heroui/tooltip'
import { TbFilterOff } from 'react-icons/tb'

import { MyButton, MyInput, MyTable } from '@/components'
import useGetParent from '@/hooks/react-query/useGetParent'
import useQuerySearch from '@/hooks/useQuerySearch'
import useLanguage from '@/hooks/useLanguage'
import useDebounce from '@/hooks/useDebounce'
import { IParent, IParentFilter } from '@/services/API/Parent/type'
import { cn } from '@/utils/tailwind'

const ParentAdminScreen = () => {
  const { translate } = useLanguage()
  const { query, updateQuery, clearAll } = useQuerySearch<IParentFilter>()
  const [searchName, setSearchName] = React.useState<string>(query.name || '')

  const valueSearchDebounce = useDebounce(searchName, 500)

  React.useEffect(() => {
    updateQuery('name', valueSearchDebounce)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueSearchDebounce])

  const handleSearch = (value: string) => {
    setSearchName(value)
  }

  const { data: parents = [], isLoading, isError, fetchNextPage, hasNextPage } = useGetParent(query)

  const columns = [
    { key: 'name', label: translate('admin.name') },
    { key: 'phone', label: translate('admin.phone') || 'Số điện thoại' },
    { key: 'address', label: translate('admin.address') || 'Địa chỉ' },
    { key: 'note', label: translate('admin.note') || 'Ghi chú' },
    { key: 'actions', label: translate('admin.actions') || 'Hành động' },
  ]

  const renderCell = React.useCallback((item: IParent, columnKey: string) => {
    switch (columnKey) {
      case 'name':
        return item.name
      case 'phone':
        return item.phone
      case 'address':
        return item.address || 'N/A'
      case 'note':
        return item.note || 'N/A'
      case 'actions':
        return (
          <div className='flex items-center gap-2'>
            <MyButton color='primary' size='sm' variant='flat' onPress={() => {}}>
              Sửa
            </MyButton>
            <MyButton color='danger' size='sm' variant='flat' onPress={() => {}}>
              Xóa
            </MyButton>
          </div>
        )
      default:
        return null
    }
  }, [])

  if (isError) return <div className='text-danger text-center'>{translate('errors.serverError')}</div>

  return (
    <div className={cn('flex flex-col gap-6 w-full py-8')}>
      <div className={cn('flex justify-between items-center')}>
        <h1 className={cn('text-3xl font-bold')}>{translate('admin.parentManagement') || 'Quản lý phụ huynh'}</h1>
        <div className='flex gap-4 items-center'>
          <MyInput placeholder={translate('admin.searchName') || 'Tìm kiếm tên'} value={searchName} onChange={(e) => handleSearch(e.target.value)} />
          <Tooltip content={translate('common.noData') || 'Xóa bộ lọc'}>
            <MyButton isIconOnly color='warning' onPress={clearAll}>
              <TbFilterOff />
            </MyButton>
          </Tooltip>
        </div>
      </div>

      <MyTable
        ariaLabel='Parent Table'
        columns={columns}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
        items={parents}
        renderCell={renderCell}
        onLoadMore={fetchNextPage}
      />
    </div>
  )
}

export default ParentAdminScreen
