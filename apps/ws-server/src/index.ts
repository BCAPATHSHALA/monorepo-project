import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({ port: 3001 });

server.on("connection", async (socket) => {
  await client.user.create({
    data: {
      username: `user-${Math.random().toString()}`,
      password: `password-${Math.random().toString()}`,
    },
  });
  socket.send("Hi there you are connected to the server");
});
