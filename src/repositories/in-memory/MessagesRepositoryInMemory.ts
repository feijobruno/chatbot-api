import { EntityRepository } from "typeorm";
import { Message } from "../../entities/Message";
import { ICreateMessageDTO, IMessagesRepository } from "../IMessagesRepository";

@EntityRepository(Message)
class MessagesRepositoryInMemory implements IMessagesRepository {
    
    messages: Message[] = []; 

    async listByUser(user_id: string): Promise<Message[] | undefined> {
        return this.messages.filter((message) => message.user_id === user_id);
    }
    
    async create({ admin_id, text, user_id }: ICreateMessageDTO): Promise<void> {
        const message = new Message();
        Object.assign(message, { admin_id, text, user_id })
        
        this.messages.push(message);
    }
}

export { MessagesRepositoryInMemory };
