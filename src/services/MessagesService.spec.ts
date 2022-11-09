import { MessagesRepositoryInMemory } from "../repositories/in-memory/MessagesRepositoryInMemory";
import { MessagesService } from "./MessagesService";

let messagesService: MessagesService;
let messagesRepositoryInMemory: MessagesRepositoryInMemory;

describe("Create Message", () => {
  beforeEach(() => {
    messagesRepositoryInMemory = new MessagesRepositoryInMemory();
    messagesService = new MessagesService(messagesRepositoryInMemory);
  });

  it("should be able to create a new message", async () => {
    
    const message = {
      admin_id: '01',
      text: 'Dúvida sobre a fatura',
      user_id: "010"
    };

    await messagesService.create({
      admin_id: message.admin_id,
      text: message.text,
      user_id: message.user_id
    });
    
    expect(message).toHaveProperty("id");
  });
});