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
    const message = await messagesService.create({
      admin_id: "01",
      text: "Car Description",
      user_id: "100"
    });

    const messageCreated = await messagesRepositoryInMemory.listByUser( message.user_id );

    expect(message).toHaveProperty("id");
  });
});