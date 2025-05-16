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
    post('/sign-up')
  }

  const handleGoogleSignUp = () => {
    window.location.href = '/google/redirect'
  }

  return (
    <AuthShell>
      <div className="flex flex-1 items-center xl:items-start justify-center px-8 md:px-24">
        <div className="w-full max-w-xl xl:mt-40 mt-4">
          <h1 className="text-2xl xl:text-5xl font-bold mb-2">Create an account</h1>
          <p className="text-md xl:text-lg text-secondary-foreground mb-8">
            Welcome! Join us and start your experience.
          </p>
          <div className="font-extralight text-sm mt-4 mb-8 text-secondary-foreground">
            Already have an account?{' '}
            <a className="text-violet-500 underline" href="/sign-in">
              Login
            </a>
          </div>
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

          <div className="flex items-center my-6">
            <div className="flex-1 h-[0.5px] bg-gray-200/20"></div>
            <span className="px-6 text-xs font-extralight text-gray-500">Or register with</span>
            <div className="flex-1 h-[0.5px] bg-gray-200/20"></div>
          </div>

          <div
            className="flex items-center justify-center flex-1 border-1 gap-x-2 border-gray-200/25 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-200/5 hover:border-gray-200/35 transition-all duration-200 ease-in-out"
            onClick={handleGoogleSignUp}
          >
            <svg
              width="20px"
              height="20px"
              viewBox="-3 0 262 262"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
              />
              <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
              />
              <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
              />
              <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335"
              />
            </svg>
            Google
          </div>
        </div>
      </div>
    </AuthShell>
  )
}

export default SignUpPage
