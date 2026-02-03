'use client'
import { useRouter } from 'next/navigation'
import { Tooltip } from '@heroui/tooltip'
import { TbFilterOff } from 'react-icons/tb'
import { SortDescriptor } from '@heroui/table'
import { useEffect, useMemo, useState } from 'react'

import { MyButton, MyInput, MyTable } from '@/components'
import useGetClass from '@/hooks/react-query/useGetClass'
import useLanguage from '@/hooks/useLanguage'
import { IClass, IClassFilter } from '@/services/API/Class/type'
import { ITeacher } from '@/services/API/Teacher/type'
import { numberWithCommas } from '@/utils/functions'
import useQuerySearch from '@/hooks/useQuerySearch'
import useDebounce from '@/hooks/useDebounce'
import { cn } from '@/utils/tailwind'
import useUser from '@/hooks/useUser'

const ClassAdminScreen = () => {
  const { translate, lang } = useLanguage()
  const { user } = useUser()
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

  const { data: classes = [], isLoading, fetchNextPage, hasNextPage } = useGetClass(query)

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

  const renderCell = (item: IClass, columnKey: string) => {
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
            <MyButton color='primary' size='sm' variant='flat' onPress={() => router.push(`/register?idClass=${item._id}`)}>
              {translate('common.register') || 'Đăng ký'}
            </MyButton>
            <MyButton color='secondary' size='sm' variant='flat' onPress={() => router.push(`/admin/student?idClass=${item._id}`)}>
              {translate('admin.listStudent') || 'DS Học sinh'}
            </MyButton>
          </div>
        )
      default:
        return null
    }
  }

  const renderMobileItem = (item: IClass) => {
    return (
      <div className='flex flex-col gap-3'>
        <div className='flex justify-between items-start'>
          <div>
            <h3 className='text-lg font-bold text-primary'>{item.name}</h3>
            <p className='text-small text-default-500'>{(item.idTeacher as ITeacher)?.name || 'Thầy Hồng'}</p>
          </div>
          <div className='bg-primary/10 text-primary px-2 py-1 rounded-md text-small font-semibold'>{numberWithCommas(item.price, true)} VNĐ</div>
        </div>

        <div className='flex flex-col gap-1 text-small'>
          <div className='flex justify-between'>
            <span className='text-default-500'>{translate('admin.time') || 'Thời gian'}:</span>
            <span>{item.attributes?.time || 'N/A'}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-default-500'>{translate('admin.phone') || 'Số lượng'}:</span>
            <span>{item.numberStudent || 0} học sinh</span>
          </div>
        </div>

        <div className='flex gap-2 mt-2 pt-2 border-t border-default-100'>
          <MyButton className='flex-1' color='primary' size='sm' variant='flat' onPress={() => router.push(`/register?idClass=${item._id}`)}>
            {translate('common.register') || 'Đăng ký'}
          </MyButton>
          <MyButton className='flex-1' color='secondary' size='sm' variant='flat' onPress={() => router.push(`/admin/student?idClass=${item._id}`)}>
            {translate('admin.listStudent') || 'DS Học sinh'}
          </MyButton>
        </div>
      </div>
    )
  }

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
          {user && (
            <MyButton color='primary' onPress={() => {}}>
              {translate('common.create') || 'Thêm mới'}
            </MyButton>
          )}
        </div>
      </div>

      <MyTable
        ariaLabel='Class Table'
        columns={columns}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
        items={sortedItems}
        renderCell={renderCell}
        renderMobileItem={renderMobileItem}
        sortDescriptor={sortDescriptor}
        onLoadMore={fetchNextPage}
        onSortChange={setSortDescriptor}
      />
    </div>
  )
}

export default ClassAdminScreen
