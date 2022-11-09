import { Setting } from "../entities/Setting";

// DTO => Data transfer object
interface ICreateSettingsDTO {
    chat: boolean;
    username: string;
}

interface ISettingsRepository {
    findByUserName(username: string): Promise<Setting>;
    create({ chat, username }: ICreateSettingsDTO): Promise<void>;
    update(username: string, chat: boolean): Promise<void>;
}

export { ISettingsRepository, ICreateSettingsDTO };