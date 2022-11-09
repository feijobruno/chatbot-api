import { inject, injectable } from "tsyringe";
import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";
import { IConnectionsRepository } from "../repositories/IConnectionsRepository";
import { ConnectionsRepository } from "../repositories/typeorm/ConnectionsRepository";

interface IRequest {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string;
}

@injectable()
class ConnectionsService {
  constructor(
    // Injeta o MessagesRepository na prop
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository 
    ) {} 

  async create({ socket_id, user_id, admin_id, id }: IRequest) {
    await this.connectionsRepository.create({  socket_id, user_id, admin_id, id });
  }

  async findByUserId(user_id: string) {
    return await this.connectionsRepository.findByUserId(user_id);
  }

  async findAllWithoutAdmin() {
    return await this.connectionsRepository.findAllWithoutAdmin();
  }

  async findBySocketID(socket_id: string) {
    return await this.connectionsRepository.findBySocketID(socket_id);
  }

  async updateAdminID(user_id: string, admin_id: string) {
    await this.connectionsRepository.updateAdminID(user_id, admin_id);
  }

  async deleteBySocketId(socket_id: string) {
    await this.connectionsRepository.deleteBySocketId(socket_id);
  }
}
export { ConnectionsService };
