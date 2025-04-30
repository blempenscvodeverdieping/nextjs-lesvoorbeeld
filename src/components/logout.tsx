import { verifySession } from "@/lib/dal"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function Logout() {

  const session = await verifySession()

  async function logout() {
    "use server"
    const cookieStore = await cookies()
    cookieStore.delete('session')
    redirect('/login')
  }

  if (!session) {
    return null
  }

  return (
    <form action={logout}>
      <button type="submit">Logout</button>
    </form>
  )
}