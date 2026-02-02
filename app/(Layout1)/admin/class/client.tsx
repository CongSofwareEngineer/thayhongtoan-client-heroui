'use client'
import { useRouter } from 'next/navigation'
import { Tooltip } from '@heroui/tooltip'
import { TbFilterOff } from 'react-icons/tb'
import { SortDescriptor } from '@heroui/table'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { MyButton, MyInput, MyTable } from '@/components'
import useGetClass from '@/hooks/react-query/useGetClass'
import useLanguage from '@/hooks/useLanguage'
import { IClass, IClassFilter } from '@/services/API/Class/type'
import { ITeacher } from '@/services/API/Teacher/type'
import { numberWithCommas } from '@/utils/functions'
import useQuerySearch from '@/hooks/useQuerySearch'
import useDebounce from '@/hooks/useDebounce'
import { cn } from '@/utils/tailwind'

const ClassAdminScreen = () => {
  const { translate, lang } = useLanguage()
  const router = useRouter()
  const { query, updateQuery, clearAll } = useQuerySearch<IClassFilter>()
  const [searchName, setSearchName] = useState<string>(query.name || '')
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'price',
    direction: 'ascending',
  })

  const valueSearchDebounce = useDebounce(searchName, 500)

  useEffect(() => {
    updateQuery('name', valueSearchDebounce)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueSearchDebounce])

  const { data: classes = [], isLoading, isError, fetchNextPage, hasNextPage } = useGetClass(query)

  const sortedItems = useMemo(() => {
    return [...classes].sort((a: IClass, b: IClass) => {
      const first = a[sortDescriptor.column as keyof IClass] as number
      const second = b[sortDescriptor.column as keyof IClass] as number
      const cmp = first < second ? -1 : first > second ? 1 : 0

      return sortDescriptor.direction === 'descending' ? -cmp : cmp
    })
  }, [sortDescriptor, classes])

  const handleSearch = (value: string) => {
    setSearchName(value)
  }

  const columns = [
    { key: 'name', label: translate('admin.name') },
    { key: 'teacher', label: translate('admin.teacher') },
    { key: 'price', label: translate('admin.amount') || 'Giá', allowSorting: true },
    { key: 'numberStudent', label: translate('admin.phone') || 'Số lượng học sinh' },
    { key: 'time', label: translate('admin.time') || 'Thời gian' },
    { key: 'actions', label: translate('admin.actions') || 'Hành động' },
  ]

  const renderCell = useCallback(
    (item: IClass, columnKey: string) => {
      switch (columnKey) {
        case 'name':
          return item.name
        case 'teacher':
          return (item.idTeacher as ITeacher)?.name || 'Thầy Hồng'
        case 'price':
          return numberWithCommas(item.price, true) + ' VNĐ'
        case 'numberStudent':
          return `${item.numberStudent || 0} học sinh`
        case 'time':
          return item.attributes?.time || 'N/A'
        case 'actions':
          return (
            <div className='flex items-center gap-2'>
              <MyButton color='primary' size='sm' variant='flat' onPress={() => {}}>
                Đăng ký
              </MyButton>
              <MyButton color='secondary' size='sm' variant='flat' onPress={() => router.push(`/admin/student?idClass=${item._id}`)}>
                {translate('admin.listStudent') || 'DS Học sinh'}
              </MyButton>
            </div>
          )
        default:
          return null
      }
    },
    [router, lang]
  )

  if (isError) return <div className='text-danger text-center'>{translate('errors.serverError')}</div>

  return (
    <div className={cn('flex flex-col gap-6 w-full py-8')}>
      <div className='flex justify-between items-center gap-4 flex-wrap'>
        <h1 className={cn('text-3xl font-bold')}>{translate('admin.classManagement')}</h1>
        <div className='flex gap-4 items-center'>
          <MyInput placeholder={translate('admin.searchName') || 'Tìm kiếm tên'} value={searchName} onChange={(e) => handleSearch(e.target.value)} />
          <Tooltip content={translate('common.noData') || 'Xóa bộ lọc'}>
            <MyButton isIconOnly color='warning' onPress={clearAll}>
              <TbFilterOff />
            </MyButton>
          </Tooltip>
          <MyButton color='primary' onPress={() => {}}>
            {translate('common.create') || 'Thêm mới'}
          </MyButton>
        </div>
      </div>

      <MyTable
        ariaLabel='Class Table'
        columns={columns}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
        items={sortedItems}
        renderCell={renderCell}
        sortDescriptor={sortDescriptor}
        onLoadMore={fetchNextPage}
        onSortChange={setSortDescriptor}
      />
    </div>
  )
}

export default ClassAdminScreen
