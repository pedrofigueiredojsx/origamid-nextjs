'use server'

import { cookies } from 'next/headers'

export async function getCookie(key: string) {
  const cookieStore = await cookies()
  return cookieStore.get(key)?.value
}
