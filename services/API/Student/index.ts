import BaseAPI from '../BaseAPI'

import { IStudent, IStudentFilter } from './type'

class StudentBase extends BaseAPI<IStudent, IStudentFilter> {
  router = '/student'
}

const StudentAPI = new StudentBase()

export default StudentAPI
