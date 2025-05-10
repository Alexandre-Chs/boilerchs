/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

const DashboardController = () => import('#src/dashboard/controllers/dashboard_controller')
router
  .get('/dashboard', [DashboardController, 'show'])
  .middleware(middleware.auth())
  .as('dashboard.show')
