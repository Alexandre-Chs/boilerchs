import { BaseSchema } from '@adonisjs/lucid/schema'

export default class RenameFullNameToUsername extends BaseSchema {
  async up() {
    this.schema.alterTable('users', (table) => {
      table.renameColumn('full_name', 'username')
    })
  }

  async down() {
    this.schema.alterTable('users', (table) => {
      table.renameColumn('username', 'full_name')
    })
  }
}
