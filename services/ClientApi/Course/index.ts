import { InfoTeacher } from '../type'

import { Course, ListCourse, RegisterCurse } from './type'

import { fetchData } from '@/config/fetchConfig'
import { PAGE_SIZE_LIMIT, REQUEST_TYPE } from '@/constants/app'

const CourseApi = {
  registerCourse: async (id: string, body: RegisterCurse): Promise<RegisterCurse> => {
    const data = await fetchData({
      url: `/register-course/${id}`,
      method: REQUEST_TYPE.POST,
      body,
    })

    return data?.data
  },

  getListCourses: async (page = 1, limit = PAGE_SIZE_LIMIT): Promise<ListCourse> => {
    const data = await fetchData({
      url: `/list-course?${`page=${page}&limit=${limit}`}`,
      method: REQUEST_TYPE.GET,
    })

    return data?.data
  },
  createCourse: async (body: Partial<Course>): Promise<InfoTeacher> => {
    const data = await fetchData({
      url: `/create-course`,
      method: REQUEST_TYPE.POST,
      body,
    })

    return data?.data
  },

  updateCourse: async (id: string, body: Partial<Course>): Promise<InfoTeacher> => {
    const data = await fetchData({
      url: `/update-course/${id}`,
      method: REQUEST_TYPE.POST,
      body,
    })

    return data?.data
  },
  deleteCourse: async (id: string): Promise<boolean> => {
    const data = await fetchData({
      url: `/update-course/${id}`,
      method: REQUEST_TYPE.DELETE,
    })

    return !!data?.data
  },

  updateInfoTeacher: async (id: string, body: Partial<InfoTeacher>): Promise<InfoTeacher> => {
    const data = await fetchData({
      url: `/update-info-teacher/${id}`,
      method: REQUEST_TYPE.POST,
      body,
    })

    return data?.data
  },
}

export default CourseApi
