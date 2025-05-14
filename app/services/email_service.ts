import User from '#users/models/user'
import mail from '@adonisjs/mail/services/main'

type ResetPasswordData = { token: string; user: User }
type WelcomeData = { user: User }

type EmailData = ResetPasswordData | WelcomeData

export default class EmailService {
  static from: string = 'test@gmail.com'

  static async sendEmail(to: string, subject: string, data?: WelcomeData | ResetPasswordData) {
    await mail.send((message) => {
      message.to(to).from(this.from).subject(subject).htmlView('emails/verify_email_mjml', {
        username: 'test username lol',
        verifyUrl: 'https://example.com/verify',
      })
    })
  }
}
