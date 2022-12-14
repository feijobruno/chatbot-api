import { Request, Response } from "express";
import { container } from 'tsyringe';
import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async create(request: Request, response: Response) {
    const { username, chat } = request.body;

    const settingsService = container.resolve(SettingsService);

    try {
      const settings = await settingsService.create({ chat, username });

      return response.json(settings);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }

  async findByUserName(request: Request, response: Response) {
    const { username } = request.params;

    const settingsService = container.resolve(SettingsService);

    const settings = await settingsService.findByUserName(username);

    return response.json(settings);
  }

  async update(request: Request, response: Response) {
    const { username } = request.params;

    const { chat } = request.body;

    const settingsService = container.resolve(SettingsService);

    const settings = await settingsService.update(username, chat);

    return response.json(settings);
  }
}

export { SettingsController };
