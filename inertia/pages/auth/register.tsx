import { Button } from '~/components/elements/button'
import { Checkbox } from '~/components/elements/checkbox'
import { Input } from '~/components/elements/input'
import { Label } from '~/components/elements/label'
import AuthShell from '~/components/layouts/auth_shell'

const Register = () => {
  return (
    <AuthShell>
      <div className="w-full flex flex-col justify-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-medium">Create an account</h1>
        <div className="font-extralight text-sm mt-2 text-secondary-foreground">
          Already have an accout?{' '}
          <a className="text-violet-500 underline" href="/login">
            Login
          </a>
        </div>

        <form className="flex flex-col gap-4 mt-8">
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" placeholder="Username" />

          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />

          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" />

          <div className="flex items-center space-x-2 cursor-pointer">
            <Checkbox id="terms" />
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

          <Button type="submit" className="mt-2">
            Create account
          </Button>
        </form>
      </div>
    </AuthShell>
  )
}

export default Register
