import router from '@adonisjs/core/services/router'

const SignUpController = () => import('#auth/controllers/sign_up_controller')
router.post('/register', [SignUpController, 'handle'])
