import "reflect-metadata";
import swaggerUI from "swagger-ui-express";
import { http } from "./http";
import "./shared/container";

import "./websocket/client";
import "./websocket/admin";

http.listen(3333, () => console.log("Server is running on port 3333"));
