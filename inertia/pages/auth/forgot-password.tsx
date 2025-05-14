import { useForm, usePage } from '@inertiajs/react'
import { Button } from '~/components/elements/button'
import { Input } from '~/components/elements/input'
import { Label } from '~/components/elements/label'
import AuthShell from '~/components/layouts/auth_shell'

type ForgotPasswordUser = {
  email: string
}

const ForgotPasswordPage = () => {
  const message = usePage<{ flashMessages: { success: string } }>().props
  const { data, setData, post, processing } = useForm<ForgotPasswordUser>({
    email: '',
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    post('/forgot-password')
    data.email = ''
  }

  return (
    <AuthShell>
      <div className="relative flex flex-1 items-center xl:items-start justify-center px-8 md:px-24">
        <div className="w-full max-w-xl xl:mt-40 mt-4">
          <h1 className="text-2xl xl:text-5xl font-bold mb-2">Forgot password</h1>
          <p className="text-md xl:text-lg text-secondary-foreground mb-8">
            Please enter your email address below to receive a password reset link.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6" autoComplete="off">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                className="h-12 text-base"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                autoComplete="off"
                autoFocus
              />
            </div>
            {message.flashMessages?.success && (
              <div className="text-green-500 text-sm">{message.flashMessages.success}</div>
            )}
            <Button type="submit" className="mt-2" disabled={processing}>
              Send reset link
            </Button>
          </form>
        </div>
      </div>
    </AuthShell>
  )
}

export default ForgotPasswordPage
