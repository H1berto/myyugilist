'use client';
import { useSession } from "next-auth/react"

const Page = () => {
  const session = useSession()

  if (session) {
    return <p>Welcome, {session?.data?.user?.name}!</p>
  }
  return <p>Please sign in</p>
}

export default Page