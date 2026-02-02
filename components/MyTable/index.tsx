'use client'
import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, SortDescriptor } from '@heroui/table'
import { Spinner } from '@heroui/spinner'

import MyButton from '../MyButton'

import useLanguage from '@/hooks/useLanguage'

interface Column {
  key: string
  label: string
  allowSorting?: boolean
}

interface MyTableProps {
  columns: Column[]
  items: any[]
  renderCell: (item: any, columnKey: string) => React.ReactNode
  renderMobileItem?: (item: any) => React.ReactNode
  isLoading?: boolean
  hasNextPage?: boolean
  onLoadMore?: () => void
  ariaLabel?: string
  sortDescriptor?: SortDescriptor
  onSortChange?: (descriptor: SortDescriptor) => void
}

const MyTable = ({
  columns,
  items,
  renderCell,
  renderMobileItem,
  isLoading,
  hasNextPage,
  onLoadMore,
  ariaLabel = 'Data table',
  sortDescriptor,
  onSortChange,
}: MyTableProps) => {
  const { translate } = useLanguage()

  return (
    <div className='flex flex-col gap-4 w-full'>
      {/* Mobile View */}
      {renderMobileItem && (
        <div className='md:hidden flex flex-col gap-4'>
          {items.map((item) => (
            <div key={item._id || item.key || JSON.stringify(item)} className='bg-content1 rounded-large p-4 shadow-small'>
              {renderMobileItem(item)}
            </div>
          ))}
          {!isLoading && items.length === 0 && <div className='text-center text-default-500 py-8'>{translate('common.noData')}</div>}
          {isLoading && (
            <div className='flex justify-center p-4'>
              <Spinner />
            </div>
          )}
        </div>
      )}

      {/* Desktop Table View */}
      <div className={renderMobileItem ? 'hidden md:block' : ''}>
        <Table
          aria-label={ariaLabel}
          classNames={{
            wrapper: 'p-0 shadow-none border border-default-200 rounded-xl overflow-hidden',
            th: 'bg-default-100 text-default-600 font-bold h-12',
            td: 'py-4 border-t border-default-100',
          }}
          sortDescriptor={sortDescriptor}
          onSortChange={onSortChange}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key} allowsSorting={column.allowSorting}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
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
      </div>

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
