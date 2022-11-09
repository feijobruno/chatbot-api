import { inject, injectable } from "tsyringe";
import { getCustomRepository } from "typeorm";
import { IMessagesRepository } from "../repositories/IMessagesRepository";
import { MessagesRepository } from "../repositories/typeorm/MessagesRepository";

interface IRequest {
  admin_id?: string;
  text: string;
  user_id: string;
}

// Define que a classe pode ser injetada
@injectable()
class MessagesService {

  constructor(
    // Injeta o MessagesRepository na prop
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository 
    ) {} 

  async create({ admin_id, text, user_id }: IRequest) {
    return await this.messagesRepository.create({ admin_id, text, user_id });
  }

  async listByUser(user_id: string) {
    return await this.messagesRepository.listByUser(user_id);
  }
}

export { MessagesService };
