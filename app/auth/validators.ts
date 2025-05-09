import vine from '@vinejs/vine'

export const signUpValidator = vine.compile(
  vine.object({
    username: vine.string().minLength(3).maxLength(20).trim(),
    email: vine.string().email().toLowerCase().unique({ table: 'users', column: 'email' }),
    password: vine.string().minLength(1).maxLength(30),
    terms: vine.accepted(),
  })
)
