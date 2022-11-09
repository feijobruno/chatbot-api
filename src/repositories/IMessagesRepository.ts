import { Message } from "../entities/Message";

// DTO => Data transfer object
interface ICreateMessageDTO {
    admin_id: string;
    text: string;
    user_id: string;
}

interface IMessagesRepository {
    listByUser(user_id: string): Promise<Message[]>;
    create({ admin_id, text, user_id }: ICreateMessageDTO): Promise<void>;
}

export { IMessagesRepository, ICreateMessageDTO };