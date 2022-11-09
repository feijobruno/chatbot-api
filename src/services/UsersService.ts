import { getCustomRepository } from "typeorm";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/typeorm/UsersRepository";

class UsersService {
  private usersRepository: IUsersRepository;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  
  async create(email: string) {
    return await this.usersRepository.create({ email });
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findByEmail(email);
  }
}

export { UsersService };
