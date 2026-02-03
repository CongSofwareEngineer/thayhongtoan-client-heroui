import React, { useLayoutEffect } from 'react'

import useUser from '@/hooks/useUser'
import TeacherAPI from '@/services/API/Teacher'

function PreLoadData() {
  const { setUser } = useUser()

  useLayoutEffect(() => {
    const getData = async () => {
      const res = await TeacherAPI.infoMe()

      if (res?.data) {
        setUser(res?.data)
      }
    }

    getData()
  }, [])

  return <></>
}

export default PreLoadData
