import { defineWebSocket, eventHandler } from "vinxi/http";

let users = 0;

export default eventHandler({
  handler: () => {},
  websocket: defineWebSocket({
    async open(event) {
      console.log("ws opened");
      users += 1;
    },
    async message(peer, event) {
      console.log("ws message: ", event);

      if (`${event}` === "getUsers") {
        console.log("GET USERS: ", users);
        peer.send(users);
        return;
      }

      console.log(peer.id);
      peer.send("Hi");
    },
    async close(event) {
      console.log("ws closed");
      if (users > 0) users -= 1;
      console.log("CLOSE USERS: ", users);
    },
  }),
});
