import { Server, Socket } from "socket.io";
import type { Server as HTTPServer } from "http";

let io: Server | null = null;

export function initSocket(server: HTTPServer) {
  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket: Socket) => {
    if (io) {
      console.log("Socket connected:", socket.id)

      socket.on("requestRide", () => {
        console.log("Driver search started");

        io!.emit("ride_update", {
          status: "searching",
        });
      });

      socket.on("driverAccepted", () => {
        console.log("Driver accepted ride");

        io!.emit("ride_update", {
          status: "driver_accepted",
        });
      });
    }
  });

  console.log("Socket.IO initialized")
};

export function emitEvent(event: string) {
    io!.emit(event)
}
