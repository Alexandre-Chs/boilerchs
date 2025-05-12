import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'forgot_password'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('token', 255).notNullable()
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('expires_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
