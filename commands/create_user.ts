import User from '#models/user'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'

export default class CreateUser extends BaseCommand {
  static commandName = 'create:user'
  static description = 'Create a new user in the database'
  static options: CommandOptions = {
    startApp: true,
  }

  private username: string = ''
  private password: string = ''
  private email: string = ''

  async interact() {
    this.username = await this.prompt.ask('Enter the username')
    this.password = await this.prompt.ask('Enter the password')
    this.email = await this.prompt.ask('Enter the email address')
  }

  async run() {
    this.logger.info('Creating user...')
    await User.create({ username: this.username, password: this.password, email: this.email })
  }

  async completed() {
    this.logger.success('User created successfully!')
    this.logger.info(`User details: ${this.username}, ${this.email} with password ${this.password}`)
  }
}
