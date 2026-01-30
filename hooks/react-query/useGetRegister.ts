import { useInfiniteQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { PAGE_SIZE_LIMIT } from '@/constants/app'
import { QUERY_KEY } from '@/constants/reactQuery'
import RegisterAPI from '@/services/API/Register'
import { IRegister, IRegisterFilter } from '@/services/API/Register/type'

const useGetRegister = (query: IRegisterFilter = {}, limit = PAGE_SIZE_LIMIT) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage, refetch } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [QUERY_KEY.Register, query],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await RegisterAPI.getAll({ ...query, page: pageParam, limit })

      return {
        data: (response?.data as IRegister[]) || [],
        page: pageParam,
      }
    },
    getNextPageParam: (lastPage: { data: IRegister[]; page: number }) => {
      if (lastPage?.data?.length === limit) {
        return lastPage.page + 1
      }

      return null
    },
  })

  const dataFinal = useMemo(() => {
    return data?.pages?.flatMap((item) => item.data) || []
  }, [data])

  return {
    data: dataFinal,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    refetch,
  }
}

export default useGetRegister
