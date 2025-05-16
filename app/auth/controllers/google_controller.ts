import User from '#users/models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class GoogleController {
  async handle({ response, ally, auth }: HttpContext) {
    const google = ally.use('google')

    /**
     * User has denied access by canceling
     * the login flow
     */
    if (google.accessDenied()) return 'You have cancelled the login process'

    /**
     * OAuth state verification failed. This happens when the
     * CSRF cookie gets expired.
     */
    if (google.stateMisMatch()) return 'We are unable to verify the request. Please try again'

    /**
     * Google responded with some error
     */
    if (google.hasError()) return google.getError()

    const googleUser = await google.user()
    const googleEmail = googleUser.email

    let user = await User.findBy('email', googleEmail)

    // if user does not exist, create a new one
    if (!user) {
      user = await User.create({
        email: googleEmail,
        username: googleUser?.name,
        terms: true,
      })
    }

    await auth.use('web').login(user)

    return response.redirect().toRoute('dashboard.show')
  }
}
