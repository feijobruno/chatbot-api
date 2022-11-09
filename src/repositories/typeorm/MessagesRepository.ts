import { EntityRepository, getRepository, Repository } from "typeorm";
import { Message } from "../../entities/Message";
import { ICreateMessageDTO, IMessagesRepository } from "../IMessagesRepository";

@EntityRepository(Message)
class MessagesRepository implements IMessagesRepository {
    private repository: Repository<Message>; 

    constructor() {
        this.repository = getRepository(Message);
      }

    async listByUser(user_id: string): Promise<Message[]> {
        return await this.repository.find({ where: { user_id }, relations: ["user"]});
    }
    
    async create({ admin_id, text, user_id }: ICreateMessageDTO): Promise<void> {
        const message = this.repository.create({ admin_id, text, user_id });
        await this.repository.save(message);
    }
}

export { MessagesRepository };
