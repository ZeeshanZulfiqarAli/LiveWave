import { defineWebSocket, eventHandler } from "vinxi/http";

let users = 0;

export default eventHandler({
  handler: () => {},
  websocket: defineWebSocket({
    async open(peer) {
      console.log("ws opened");
      users += 1;
      peer.publish(
        "user-count",
        JSON.stringify({ eventname: "getUsers", users: users })
      );
    },

    async message(peer, event) {
      console.log("ws message: ", event.text());

      if (`${event}` === "user-count") {
        console.log("SUBBING TO USER COUNT");
        peer.subscribe("user-count");
        return;
      }

      if (`${event}` === "getUsers") {
        console.log("GET USERS: ", users);
        peer.send(JSON.stringify({ eventname: "getUsers", users: users }));
        return;
      }
    },

    async close(peer, event) {
      console.log("ws closed");
      if (users > 0) users -= 1;
      console.log("CLOSE USERS: ", users);
      peer.publish(
        "user-count",
        JSON.stringify({ eventname: "getUsers", users: users })
      );
    },
  }),
});
