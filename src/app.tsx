import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createEffect, Suspense } from "solid-js";
import "./app.css";
import { setGlobalStore } from "./store";

export default function App() {
  createEffect(() => {
    const ws2 = new WebSocket("ws://localhost:3000/_ws");
    setGlobalStore("ws", () => ws2);
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
