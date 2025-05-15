import EmailService from '#services/email_service'
import emitter from '@adonisjs/core/services/emitter'

emitter.on('auth:forgot-password', async function (user) {
  await EmailService.sendEmailForgotPassword(user.email, 'Forgot Password', user.token)
})
