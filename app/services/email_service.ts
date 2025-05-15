import env from '#start/env'
import User from '#users/models/user'
import mail from '@adonisjs/mail/services/main'

type ResetPasswordData = { token: string; user: User }
type WelcomeData = { user: User }

type EmailData = ResetPasswordData | WelcomeData

export default class EmailService {
  static from: string = 'test@gmail.com'
  static companyName: string = `${env.get('COMPANY_NAME')}`
  static companyLogoUrl: string = `${env.get('COMPANY_LOGO_URL')}`
  static year: number = new Date().getFullYear()

  static async sendEmail(
    to: string,
    subject: string,
    view: string,
    data?: WelcomeData | ResetPasswordData
  ) {
    await mail.send((message) => {
      message.to(to).from(this.from).subject(subject).htmlView(`emails/${view}`, {
        resetUrl: 'https://example.com/verify',
        companyLogoUrl: this.companyLogoUrl,
        projectName: this.companyName,
        year: this.year,
      })
    })
  }
}
