import { forgotPasswordTokenValidator, resetPasswordValidator } from '#auth/validators'
import ForgotPassword from '#users/models/forgot_password'
import User from '#users/models/user'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import hash from '@adonisjs/core/services/hash'

export default class ResetPasswordController {
  async show({ request, response, inertia }: HttpContext) {
    const token = request.params()
    if (!token) return response.redirect().toRoute('auth.forgot-password.show')

    const { token: validatedToken } = await forgotPasswordTokenValidator.validate(token)
    const isTokenValid = await db
      .from('forgot_passwords')
      .where('token', validatedToken)
      .andWhere('expires_at', '>', new Date())
      .first()

    if (!isTokenValid) return response.redirect().toRoute('auth.forgot-password.show')
    else return inertia.render('auth/reset_password', token)
  }

  async handle({ request, response }: HttpContext) {
    const { password } = request.body()
    const { token } = request.params()

    const isTokenValid = await db
      .from('forgot_passwords')
      .where('token', token)
      .andWhere('expires_at', '>', new Date())
      .first()

    if (!isTokenValid) return response.redirect().toRoute('auth.forgot-password.show')

    const row = await ForgotPassword.findBy('token', token)
    if (!row) return response.redirect().toRoute('auth.forgot-password.show')

    // hash the password
    const hashedPassword = await hash.make(password)
    await User.query().where('id', row.userId).update({ password: hashedPassword })

    await row.delete()

    return response.redirect().toRoute('auth.sign-in.show')
  }
}
