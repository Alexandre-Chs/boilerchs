import { useForm } from '@inertiajs/react'
import { Button } from '~/components/elements/button'
import { Checkbox } from '~/components/elements/checkbox'
import { Input } from '~/components/elements/input'
import { Label } from '~/components/elements/label'
import AuthShell from '~/components/layouts/auth_shell'

type SignUpUser = {
  username: string
  email: string
  password: string
  terms: boolean
}

const SignUpPage = () => {
  const { data, setData, post, processing, errors } = useForm<SignUpUser>({
    username: '',
    email: '',
    password: '',
    terms: false,
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    post('/register')
  }

  return (
    <AuthShell>
      <div className="flex flex-1 items-start justify-center px-8 md:px-24">
        <div className="w-full max-w-xl xl:mt-40 mt-4">
          <h1 className="text-2xl xl:text-5xl font-bold mb-2">Create an account</h1>
          <p className="text-md xl:text-lg text-secondary-foreground mb-8">
            Welcome! Join us and start your experience.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6" autoComplete="off">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                className="h-12 text-base"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={data.username}
                onChange={(e) => setData('username', e.target.value)}
                autoComplete="off"
              />
              {errors.username && <div className="text-destructive text-sm">{errors.username}</div>}
            </div>
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
              {errors.email && <div className="text-destructive text-sm">{errors.email}</div>}
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
              {errors.password && <div className="text-destructive text-sm">{errors.password}</div>}
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Checkbox
                id="terms"
                defaultChecked={data.terms}
                onCheckedChange={(checked) => setData('terms', !!checked)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept{' '}
                <a href="/terms" className="text-violet-500 underline">
                  terms and conditions
                </a>
              </label>
            </div>
            {errors.terms && <div className="text-destructive text-sm">{errors.terms}</div>}
            <Button type="submit" className="mt-2" disabled={processing}>
              Create account
            </Button>
          </form>
          <div className="font-extralight text-sm mt-8 text-secondary-foreground">
            Already have an account?{' '}
            <a className="text-violet-500 underline" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </AuthShell>
  )
}

export default SignUpPage
