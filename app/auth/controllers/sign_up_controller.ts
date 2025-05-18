import { signUpValidator } from '#auth/validators'
import DiscordService from '#services/discord_service'
import User from '#users/models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class SignUpController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/sign_up')
  }

  async handle({ request, response, auth }: HttpContext) {
    const { username, email, password, terms } = await request.validateUsing(signUpValidator)
    const user = await User.create({ username, email, password, terms })
    await DiscordService.sendDiscordMessage(
      'A new user has signed up from credentials! \n' + `Username: ${username}\nEmail: ${email}`
    )
    await auth.use('web').login(user)

    response.redirect('/dashboard')
  }
}
