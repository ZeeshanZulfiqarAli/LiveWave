import { defineWebSocket, eventHandler } from "vinxi/http";

export default eventHandler({
  handler: () => {},
  websocket: defineWebSocket({
    async open(event) {
      console.log("ws opened");
    },
    async message(peer, event) {
      console.log("ws message: ", event);
      peer.send("Hi");
    },
    async close(event) {
      console.log("ws closed");
    },
  }),
});
