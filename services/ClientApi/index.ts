import CourseApi from './Course'

import { fetchData } from '@/config/fetchConfig'
import { PATH_IMG, REQUEST_TYPE } from '@/constants/app'
import { User } from '@/types'

const ClientApi = {
  ...CourseApi,
  uploadImg: async (file: any, path: PATH_IMG) => {
    return fetchData({
      url: `/upload-image/upload`,
      method: REQUEST_TYPE.POST,
      body: {
        file,
        path,
      },
    })
  },

  login: async (body: { sdt: string; password: string }): Promise<User> => {
    const data = await fetchData({
      url: `/login `,
      method: REQUEST_TYPE.POST,
      body,
    })

    return data?.data
  },
}

export default ClientApi
