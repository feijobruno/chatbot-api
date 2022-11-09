import { SettingsRepositoryInMemory } from "../repositories/in-memory/SettingsRepositoryInMemory";
import { SettingsService } from "./SettingsService";

let settingsService: SettingsService;
let settingsRepositoryInMemory: SettingsRepositoryInMemory;

describe("Create Message", () => {
  beforeEach(() => {
    settingsRepositoryInMemory = new SettingsRepositoryInMemory();
    settingsService = new SettingsService(settingsRepositoryInMemory);
  });

  it("should be able to create a new message", async () => {
    
    const setting = {
      username: '01',
      chat: true
    };

    await settingsService.create({
      username: setting.username,
      chat: setting.chat
    });
    
    expect(setting).toHaveProperty("id");
  });
});