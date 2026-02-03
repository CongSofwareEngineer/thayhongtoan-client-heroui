import { NextRequest } from 'next/server'

import TeacherAPI from '@/services/API/Teacher'

export async function POST(req: NextRequest) {
  try {
    console.log({ req: req.headers.get('origin') })

    const data = await TeacherAPI.infoMe()

    return new Response(JSON.stringify(data.data), {
      status: 200,
    })
  } catch (error) {
    // console.log({ error })

    return new Response(
      JSON.stringify({
        error,
      }),
      {
        status: 500,
      }
    )
  }
}
