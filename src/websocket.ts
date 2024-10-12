import { defineWebSocket, eventHandler } from "vinxi/http";
import { socketEmits, socketSubs } from "./constants";

let users = 0;

export default eventHandler({
  handler: () => {},
  websocket: defineWebSocket({
    async open(peer) {
      console.log("ws opened");
      users += 1;
      peer.publish(
        socketSubs.userCount,
        JSON.stringify({
          eventname: socketEmits.getUsers,
          users: users,
        })
      );
    },

    async message(peer, event) {
      console.log("ws message: ", event.text());

      // SUBSCRIBE TO USER COUNT ON ALL CHANNELS
      if (`${event}` === socketSubs.userCount)
        return peer.subscribe(socketSubs.userCount);

      if (`${event}` === socketEmits.getUsers) {
        peer.send(
          JSON.stringify({
            eventname: socketEmits.getUsers,
            users: users,
          })
        );
        return;
      }
    },

    async close(peer, event) {
      if (users > 0) users -= 1;

      peer.publish(
        socketSubs.userCount,
        JSON.stringify({ eventname: socketEmits.getUsers, users: users })
      );

      console.log("ws closed");
    },
  }),
});
