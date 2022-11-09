import "reflect-metadata";
import express from "express";
import swaggerUI from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { routes } from "./routes";
import path from "path";

import "./database";

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile)); 
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

app.get("/pages/admin", (request, response) => {
  return response.render("html/admin.html");
});

const http = createServer(app); // Criando Protocolo HTTP
const io = new Server(http); // Criando Protocolo WS

io.on("connection", (socket: Socket) => {});

app.use(express.json());
app.use(routes);

export { http, io };
