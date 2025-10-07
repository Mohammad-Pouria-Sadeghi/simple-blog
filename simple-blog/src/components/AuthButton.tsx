import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const AuthButton = () => {
  return (
    <Button asChild variant={"outline"}>
        <Link href="/api/auth/login">Login</Link>
    </Button>
  )
}

export default AuthButton