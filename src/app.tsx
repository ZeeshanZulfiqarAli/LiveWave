import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createEffect, Suspense } from "solid-js";
import "./app.css";
import { setGlobalStore } from "./store";
import { socketEmits, socketSubs } from "./constants";

export default function App() {
  createEffect(() => {
    const ws2 = new WebSocket("ws://localhost:3000/_ws");

    ws2.onopen = () => {
      ws2.send(socketSubs.userCount);
    };

    ws2.addEventListener("open", (event) => {
      ws2.send(socketEmits.getUsers);
      setGlobalStore("socketOpen", true);
    });

    ws2.onclose = () => {
      setGlobalStore("socketOpen", false);
    };

    setGlobalStore("ws", ws2);
  });

  return (
    <Router
      root={(props) => (
        <>
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
