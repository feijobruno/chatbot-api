import { getCustomRepository } from "typeorm";
import { IMessagesRepository } from "../repositories/IMessagesRepository";
import { MessagesRepository } from "../repositories/typeorm/MessagesRepository";

interface IRequest {
  admin_id?: string;
  text: string;
  user_id: string;
}

class MessagesService {

  private messagesRepository: IMessagesRepository;

  constructor() {
    this.messagesRepository = getCustomRepository(MessagesRepository);
  }

  async create({ admin_id, text, user_id }: IRequest) {
    return await this.messagesRepository.create({ admin_id, text, user_id });
  }

  async listByUser(user_id: string) {
    return await this.messagesRepository.listByUser(user_id);
  }
}

export { MessagesService };
