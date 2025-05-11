import { router } from '@inertiajs/react'
import { Button } from './button'

const ButtonLogout = () => {
  const handleLogout = () => {
    router.post('/logout')
  }

  return <Button onClick={handleLogout}>Logout</Button>
}

export default ButtonLogout
