import { EntityRepository, getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

@EntityRepository(User)
class UsersRepository implements IUsersRepository {
    
    private repository: Repository<User>; 

    constructor() {
        this.repository = getRepository(User);
    }
    
    async findByEmail(email: string): Promise<User> {
        return await this.repository.findOne({ email });
    }

    async create({ email }: ICreateUserDTO): Promise<User> {
        const userExists = await this.repository.findOne({ email });
    
        if (userExists) {
            return userExists;
        }
    
        const user = this.repository.create({ email });   
        await this.repository.save(user);
    }
}

export { UsersRepository };
