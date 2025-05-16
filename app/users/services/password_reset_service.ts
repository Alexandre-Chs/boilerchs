import ForgotPassword from '#users/models/forgot_password'
import User from '#users/models/user'
import { DateTime } from 'luxon'
import { randomBytes } from 'node:crypto'

export default class PasswordResetService {
  async generateToken(user: User) {
    const token = randomBytes(20).toString('hex')
    const expiresAt = DateTime.now().plus({ hours: 1 })

    // before delete the old token
    await this.deleteToken(user)

    // add the new token
    const resetToken = await ForgotPassword.updateOrCreate(
      { userId: user.id },
      { token, expiresAt }
    )

    return { token: resetToken.token, expiresAt: resetToken.expiresAt }
  }

  async deleteToken(user: User) {
    await ForgotPassword.query().where('userId', user.id).delete()
  }
}
