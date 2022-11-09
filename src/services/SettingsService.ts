import { getCustomRepository } from "typeorm";
import { ISettingsRepository } from "../repositories/ISettingsRepository";
import { SettingsRepository } from "../repositories/typeorm/SettingsRepository";

interface IRequest {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: ISettingsRepository;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }
  
  async create({ chat, username }: IRequest) {  
    return this.settingsRepository.create({ chat, username });
  }

  async findByUserName(username: string) {
    return await this.settingsRepository.findByUserName(username);
  }

  async update(username: string, chat: boolean){
    return await this.settingsRepository.update(username, chat);;
  }
}

export { SettingsService };
