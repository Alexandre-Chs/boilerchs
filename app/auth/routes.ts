import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

const SignUpController = () => import('#auth/controllers/sign_up_controller')
const SignInController = () => import('#auth/controllers/sign_in_controller')

// sign up
router.get('/sign-up', [SignUpController, 'show']).use(middleware.guest()).as('auth.sign-up.show')
router.post('/sign-up', [SignUpController, 'handle'])

// sign in
router.get('/sign-in', [SignInController, 'show']).use(middleware.guest()).as('auth.sign-in.show')
router.post('/sign-in', [SignInController, 'handle'])
