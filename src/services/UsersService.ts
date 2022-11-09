import { inject, injectable } from "tsyringe";
import { getCustomRepository } from "typeorm";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/typeorm/UsersRepository";

// Define que a classe pode ser injetada
@injectable()
class UsersService {

  constructor(
    // Injeta o MessagesRepository na prop
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  
  async create(email: string) {
    return await this.usersRepository.create({ email });
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findByEmail(email);
  }
}

export { UsersService };
