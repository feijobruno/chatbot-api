import { EntityRepository } from "typeorm";
import { Setting } from "../../entities/Setting";
import { ICreateSettingsDTO, ISettingsRepository } from "../ISettingsRepository";

@EntityRepository(Setting)
class SettingsRepositoryInMemory implements ISettingsRepository {
    settings: Setting[] = []; 

    findByUserName(username: string): Promise<Setting> {
        throw new Error("Method not implemented.");
    }
    update(username: string, chat: boolean): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    async create({ username, chat }: ICreateSettingsDTO): Promise<void> {
        const setting = new Setting();
        Object.assign(setting, { username, chat })
        
        this.settings.push(setting);
    }
}

export { SettingsRepositoryInMemory };
