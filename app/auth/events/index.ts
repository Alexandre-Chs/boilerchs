import EmailService from '#services/email_service'
import emitter from '@adonisjs/core/services/emitter'
import mail from '@adonisjs/mail/services/main'

emitter.on('auth:forgot-password', async function (user) {
  // here you can send the email to the user

  await EmailService.sendEmail(user.email, 'Forgot Password')
  // await mail.send((message) => {
  //   message
  //     .to(user.email)
  //     .from('test@gmail.com')
  //     .subject('Forgot Password')
  //     .html('<h1>Click here to reset your password</h1>')
  // })
})
