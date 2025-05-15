import { forgotPasswordTokenValidator } from '#auth/validators'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class ResetPasswordController {
  async handle({ request, response, inertia }: HttpContext) {
    const token = request.params()
    if (!token) return response.redirect().toRoute('auth.forgot-password.show')

    const { token: validatedToken } = await forgotPasswordTokenValidator.validate(token)
    const isTokenExpiredAndValid = await db
      .from('forgot_passwords')
      .where('token', validatedToken)
      .andWhere('expires_at', '>', new Date())
      .first()

    if (!isTokenExpiredAndValid) return response.redirect().toRoute('auth.forgot-password.show')
    else return inertia.render('auth/reset_password', { token })
  }
}
