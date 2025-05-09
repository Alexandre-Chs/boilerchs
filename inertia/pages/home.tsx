import { Head } from '@inertiajs/react'
import Login from './auth/login'

export default function Home() {
  return (
    <>
      <Head title="Homepage" />
      <Login />
    </>
  )
}
