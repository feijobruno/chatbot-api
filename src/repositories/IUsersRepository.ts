import { User } from "../entities/User";

// DTO => Data transfer object
interface ICreateUserDTO {
    email: string;
}

interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    create( email : ICreateUserDTO): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO };