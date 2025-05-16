import User from '#users/models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class SignInController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/sign_in')
  }

  async handle({ request, response, auth, session }: HttpContext) {
    try {
      const { email, password } = request.only(['email', 'password'])
      const user = await User.verifyCredentials(email, password)

      // if no password is because user come from provider
      if (!user || !user.password) {
        session.flash('errors', 'The provided email or password is incorrect')
        return response.redirect().toRoute('auth.sign-in.show')
      }

      await auth.use('web').login(user)
      return response.redirect().toRoute('dashboard.show')
    } catch (error) {
      session.flash('errors', 'The provided email or password is incorrect')
      return response.redirect().toRoute('auth.sign-in.show')
    }
  }
}
