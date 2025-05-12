import type { HttpContext } from '@adonisjs/core/http'

export default class ForgotPasswordsController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/forgot-password')
  }

  async handle({ request, response, session }: HttpContext) {
    const email = request.only(['email'])
  }
}
