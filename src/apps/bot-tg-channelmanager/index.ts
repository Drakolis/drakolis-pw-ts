// tslint:disable-next-line: import-name
import TelegramBot from 'node-telegram-bot-api';
import { BaseApplication } from '../BaseApplication';
import { Service } from '../../services/eService';
import post from './commands/post';
import config from '../../config';

export default class BotTGChannelManager extends BaseApplication {

  private bot: TelegramBot;

  public getName(): string {
    return 'BotTGChannelManager';
  }

  public getRequiredServices(): Service[] {
    return [Service.Logger, Service.Postgress];
  }

  public async startApplication(): Promise<boolean> {
    this.bot = new TelegramBot(config.telegramConfig.channelManagerToken, { polling: true });
    post(this.bot);
    return true;
  }

  public isRunning(): boolean {
    return true;
  }

  public async stop(): Promise<boolean> {
    return true;
  }

}
