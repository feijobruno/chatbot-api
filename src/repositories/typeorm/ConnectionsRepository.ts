import { EntityRepository, getRepository, Repository } from "typeorm";
import { Connection } from "../../entities/Connection";
import { IConnectionsRepository, ICreateConnectionDTO } from "../IConnectionsRepository";

@EntityRepository(Connection)
class ConnectionsRepository implements IConnectionsRepository {
    
    private repository: Repository<Connection>; 

    constructor() {
        this.repository = getRepository(Connection);
    }

    async create({ socket_id, user_id, admin_id, id }: ICreateConnectionDTO): Promise<Connection> {
        const connection = this.repository.create({
            socket_id,
            user_id,
            admin_id,
            id,
          });
      
          await this.repository.save(connection);
      
          return connection;
    }
    
    async findByUserId(user_id: string): Promise<Connection> {
        return await this.repository.findOne({ user_id });
    }
    
    async findAllWithoutAdmin(): Promise<Connection[]> {
        const connections = await this.repository.find({
            where: { admin_id: null },
            relations: ["user"],
          });
      
          return connections;
    }

    async findBySocketID(socket_id: string): Promise<Connection> {
        return await this.repository.findOne({ socket_id });
    }
    
    async updateAdminID(user_id: string, admin_id: string): Promise<void> {
        await this.repository
        .createQueryBuilder()
        .update(Connection)
        .set({ admin_id })
        .where("user_id = :user_id", {
          user_id,
        })
        .execute();
    }
    async deleteBySocketId(socket_id: string): Promise<void> {
        await this.repository
        .createQueryBuilder()
        .delete()
        .where("socket_id = :socket_id", {
        socket_id,
        })
      .execute();
    }
}

export { ConnectionsRepository };