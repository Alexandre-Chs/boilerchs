import { Link, useForm } from '@inertiajs/react'
import { Button } from '~/components/elements/button'
import { Input } from '~/components/elements/input'
import { Label } from '~/components/elements/label'
import { usePage } from '@inertiajs/react'
import AuthShell from '~/components/layouts/auth_shell'

type SignInUser = {
  email: string
  password: string
}

const SignInPage = () => {
  const message = usePage<{ flashMessages: { errors: string } }>().props
  const { data, setData, post, processing } = useForm<SignInUser>({ email: '', password: '' })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    post('/sign-in')
  }

  return (
    <AuthShell>
      <div className="relative flex flex-1 items-center xl:items-start justify-center px-8 md:px-24">
        <div className="absolute top-6 right-10 flex items-center gap-x-4">
          Don't have an account?
          <Link href="/sign-up">
            <Button>Sign up</Button>
          </Link>
        </div>
        <div className="w-full max-w-xl xl:mt-40 mt-4">
          <h1 className="text-2xl xl:text-5xl font-bold mb-2">Login</h1>
          <p className="text-md xl:text-lg text-secondary-foreground mb-8">
            Please enter your login details below to use the app.
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
              />
            </div>
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
                autoComplete="new-password"
              />
            </div>
            <Button type="submit" className="mt-2" disabled={processing}>
              Login
            </Button>
            {message.flashMessages.errors && (
              <div className="text-destructive text-sm">{message.flashMessages.errors}</div>
            )}
            <div className="font-extralight text-sm mt-4 text-secondary-foreground text-center">
              <a className="text-violet-500 underline" href="forgot-password">
                Forgot the password ?
              </a>
            </div>
          </form>
        </div>
      </div>
    </AuthShell>
  )
}

export default SignInPage
