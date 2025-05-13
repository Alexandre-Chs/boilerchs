declare module '@adonisjs/core/types' {
  interface EventsList {
    'auth:forgot-password': {
      email: string
      token: string
    }
  }
}
