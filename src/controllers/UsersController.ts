import { Request, Response } from "express";
import { container } from 'tsyringe';
import { UsersService } from "../services/UsersService";

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const usersService = container.resolve(UsersService);

    const user = await usersService.create(email);

    return response.json(user);
  }
}

export { UsersController };
