import { Head } from '@inertiajs/react'
import Register from './auth/sign_up'

export default function Home() {
  return (
    <>
      <Head title="Homepage" />
      <Register />
    </>
  )
}
