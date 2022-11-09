import { Connection } from "../entities/Connection";

// DTO => Data transfer object
interface ICreateConnectionDTO {
    socket_id: string;
    user_id: string;
    admin_id?: string;
    id?: string;
}

interface IConnectionsRepository {
    create({ socket_id, user_id, admin_id, id}: ICreateConnectionDTO): Promise<Connection>;
    findByUserId(user_id: string): Promise<Connection>;
    findAllWithoutAdmin(): Promise<Connection[]>;
    findBySocketID(socket_id: string): Promise<Connection>;
    updateAdminID(user_id: string, admin_id: string): Promise<void>;
    deleteBySocketId(socket_id: string): Promise<void>;
}

export { IConnectionsRepository, ICreateConnectionDTO };