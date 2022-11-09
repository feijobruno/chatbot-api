import "reflect-metadata";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { Setting } from "../../entities/Setting";
import { ICreateSettingsDTO, ISettingsRepository } from "../ISettingsRepository";

@EntityRepository(Setting)
class SettingsRepository implements ISettingsRepository {
    private repository: Repository<Setting>; 

    constructor() {
        this.repository = getRepository(Setting);
    }

    async create({ chat, username }: ICreateSettingsDTO): Promise<void> {
        await this.repository.findOne({ username });     
    }
    
    async findByUserName(username: string): Promise<Setting> {
        return await this.repository.findOne({ username });
    }

    async update(username: string, chat: boolean){
        await this.repository
        .createQueryBuilder()
        .update(Setting)
        .set({ username, chat })
        .where("username = :username", {
        username,
      })
      .execute();
    }
}

export { SettingsRepository };
