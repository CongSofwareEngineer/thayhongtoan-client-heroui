'use client'
import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@heroui/table'
import { Spinner } from '@heroui/spinner'

import MyButton from '../MyButton'

import useLanguage from '@/hooks/useLanguage'

interface Column {
  key: string
  label: string
}

interface MyTableProps {
  columns: Column[]
  items: any[]
  renderCell: (item: any, columnKey: string) => React.ReactNode
  isLoading?: boolean
  hasNextPage?: boolean
  onLoadMore?: () => void
  ariaLabel?: string
}

const MyTable = ({ columns, items, renderCell, isLoading, hasNextPage, onLoadMore, ariaLabel = 'Data table' }: MyTableProps) => {
  const { translate } = useLanguage()

  return (
    <div className='flex flex-col gap-4 w-full'>
      <Table
        aria-label={ariaLabel}
        classNames={{
          wrapper: 'p-0 shadow-none border border-default-200 rounded-xl overflow-hidden',
          th: 'bg-default-100 text-default-600 font-bold h-12',
          td: 'py-4 border-t border-default-100',
        }}
      >
        <TableHeader columns={columns}>{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}</TableHeader>
        <TableBody
          emptyContent={!isLoading && translate('common.noData')}
          items={items}
          loadingContent={<Spinner label={translate('common.loading')} />}
          loadingState={isLoading ? 'loading' : 'idle'}
        >
          {(item) => (
            <TableRow key={item._id || item.key || JSON.stringify(item)}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey as string)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>

      {hasNextPage && (
        <div className='flex justify-center mt-4'>
          <MyButton color='primary' isLoading={isLoading} variant='flat' onClick={onLoadMore}>
            {translate('common.loadMore')}
          </MyButton>
        </div>
      )}
    </div>
  )
}

export default MyTable
