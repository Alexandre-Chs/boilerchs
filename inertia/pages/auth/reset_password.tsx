import { useForm } from '@inertiajs/react'
import { Label } from '@radix-ui/react-label'
import { Button } from '~/components/elements/button'
import { Input } from '~/components/elements/input'
import AuthShell from '~/components/layouts/auth_shell'

type ResetPasswordUser = {
  password: string
}

const ResetPasswordPage = ({ token }: { token: string }) => {
  const { data, setData, post, processing } = useForm<ResetPasswordUser>({
    password: '',
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    post('/reset-password')
    data.password = ''
  }

  return (
    <AuthShell>
      <div className="relative flex flex-1 items-center xl:items-start justify-center px-8 md:px-24">
        <div className="w-full max-w-xl xl:mt-40 mt-4">
          <h1 className="text-2xl xl:text-5xl font-bold mb-2">Reset password</h1>
          <p className="text-md xl:text-lg text-secondary-foreground mb-8">
            Please enter your new password below.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6" autoComplete="off">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                className="h-12 text-base"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                autoComplete="off"
                autoFocus
              />
            </div>
            <Button type="submit" className="mt-2" disabled={processing}>
              Reset password
            </Button>
          </form>
        </div>
      </div>
    </AuthShell>
  )
}

export default ResetPasswordPage
