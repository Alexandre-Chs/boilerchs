import vine from '@vinejs/vine'

export const signUpValidator = vine.compile(
  vine.object({
    username: vine.string().minLength(3).maxLength(20).trim(),
    email: vine.string().email().toLowerCase().unique({ table: 'users', column: 'email' }),
    password: vine.string().minLength(1).maxLength(30),
    terms: vine.accepted(),
  })
)

export const forgotPasswordValidator = vine.compile(
  vine.object({
    email: vine.string().email().toLowerCase(),
  })
)

export const forgotPasswordTokenValidator = vine.compile(
  vine.object({
    token: vine.string().minLength(1),
  })
)

export const resetPasswordValidator = vine.compile(
  vine.object({
    password: vine.string().minLength(1).maxLength(30),
    token: vine.string().minLength(1),
  })
)
