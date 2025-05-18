import env from '#start/env'

export default class DiscordService {
  static webhookUrl: string = `${env.get('DISCORD_WEBHOOK_URL')}`

  static async sendDiscordMessage(message: string) {
    const response = await fetch(this.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: message,
      }),
    })

    if (!response.ok) {
      throw new Error(`Failed to send message to Discord: ${response.statusText}`)
    }
  }
}
