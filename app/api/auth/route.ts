import { cookies } from "next/headers"

export async function isAuthenticated() {
  const cookieStore = await cookies()
  if(cookieStore.has(process.env.NEXT_PUBLIC_COOKIE_NAME ?? '')) return true
  else return false
}