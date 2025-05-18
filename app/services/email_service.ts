import env from '#start/env'
import mail from '@adonisjs/mail/services/main'

export default class EmailService {
  static from: string = 'test@gmail.com'
  static companyName: string = `${env.get('COMPANY_NAME')}`
  static companyLogoUrl: string = `${env.get('COMPANY_LOGO_URL')}`
  static year: number = new Date().getFullYear()
  static appUrl: string = `${env.get('APP_URL')}`

  static async sendEmailForgotPassword(to: string, subject: string, token: string) {
    await mail.send((message) => {
      message
        .to(to)
        .from(this.from)
        .subject(subject)
        .htmlView('emails/forgot_password_mjml', {
          companyLogoUrl: this.companyLogoUrl,
          projectName: this.companyName,
          year: this.year,
          resetUrl: `${this.appUrl}/reset-password/${token}`,
        })
    })
  }

  static async sendEmailWelcome(to: string, subject: string, username: string) {
    await mail.send((message) => {
      message
        .to(to)
        .from(this.from)
        .subject(subject)
        .htmlView('emails/welcome_mjml', {
          companyLogoUrl: this.companyLogoUrl,
          projectName: this.companyName,
          year: this.year,
          appUrl: this.appUrl,
          username,
          dashboardUrl: `${this.appUrl}/dashboard`,
        })
    })
  }
}
