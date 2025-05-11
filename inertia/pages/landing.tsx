import { Head, Link } from '@inertiajs/react'
import ButtonLogout from '~/components/elements/button-logout'

export default function LandingPage() {
  return (
    <>
      <Head title="Landing page" />
      <div>landing page</div>
      <Link href="/sign-up">Sign up</Link>
      <ButtonLogout />
    </>
  )
}
