import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

const SignUpController = () => import('#auth/controllers/sign_up_controller')
const SignInController = () => import('#auth/controllers/sign_in_controller')
const ForgotPasswordController = () => import('#auth/controllers/forgot_password_controller')
const ResetPasswordController = () => import('#auth/controllers/reset_password_controller')

// sign up
router.get('/sign-up', [SignUpController, 'show']).use(middleware.guest()).as('auth.sign-up.show')
router.post('/sign-up', [SignUpController, 'handle'])

// sign in
router.get('/sign-in', [SignInController, 'show']).use(middleware.guest()).as('auth.sign-in.show')
router.post('/sign-in', [SignInController, 'handle'])

// forgot password
router
  .get('/forgot-password', [ForgotPasswordController, 'show'])
  .use(middleware.guest())
  .as('auth.forgot-password.show')

router
  .post('/forgot-password', [ForgotPasswordController, 'handle'])
  .as('auth.forgot-password.handle')

// reset password
router.get('/reset-password/:token', [ResetPasswordController, 'handle'])

// logout
router
  .post('/logout', async ({ auth, response }) => {
    await auth.use('web').logout()
    return response.redirect('/sign-in')
  })
  .use(middleware.auth())
