import { forgotPasswordValidator } from '#auth/validators'
import User from '#users/models/user'
import PasswordResetService from '#users/services/password_reset_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import emitter from '@adonisjs/core/services/emitter'

@inject()
export default class ForgotPasswordController {
  constructor(private passwordResetService: PasswordResetService) {}

  async show({ inertia }: HttpContext) {
    return inertia.render('auth/forgot-password')
  }

  async handle({ request, response, session }: HttpContext) {
    try {
      const { email } = await request.validateUsing(forgotPasswordValidator)

      // check if the email exists in the database
      const user = await User.findBy('email', email)
      if (!user) throw new Error('User not found')

      const { token } = await this.passwordResetService.generateToken(user)

      emitter.emit('auth:forgot-password', { email, token })
      session.flash('success', 'Email sent successfully')
      return response.redirect().toRoute('auth.forgot-password.show')
    } catch (error) {
      session.flash('success', 'Email sent successfully')
      return response.redirect().toRoute('auth.forgot-password.show')
    }
  }
}
