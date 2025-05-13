import emitter from '@adonisjs/core/services/emitter'

emitter.on('auth:forgot-password', function (user) {
  // here you can send the email to the user
  console.log('User forgot password:', user)
})
