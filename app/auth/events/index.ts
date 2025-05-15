import EmailService from '#services/email_service'
import emitter from '@adonisjs/core/services/emitter'
import mail from '@adonisjs/mail/services/main'

emitter.on('auth:forgot-password', async function (user) {
  await EmailService.sendEmail(user.email, 'Forgot Password', 'forgot_password_mjml')
})
