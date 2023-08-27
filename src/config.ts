import { ConfigFramework } from '@book000/node-utils'

export interface ConfigInterface {
  discord: {
    token: string
    channel?: {
      greeting?: string
    }
    role?: {
      mailVerified?: string
    }
  }
}

export class Configuration extends ConfigFramework<ConfigInterface> {
  protected validates(): {
    [key: string]: (config: ConfigInterface) => boolean
  } {
    return {
      'discord is required': (config) => !!config.discord,
      'discord.token is required': (config) => !!config.discord.token,
      'discord.token must be a string': (config) =>
        typeof config.discord.token === 'string',
      'discord.channel.greeting must be a string': (config) =>
        config.discord.channel?.greeting === undefined ||
        typeof config.discord.channel.greeting === 'string',
      'discord.role.mailVerified must be a string': (config) =>
        config.discord.role?.mailVerified === undefined ||
        typeof config.discord.role.mailVerified === 'string',
    }
  }
}
