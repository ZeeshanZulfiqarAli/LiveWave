import { defineConfig } from "@solidjs/start/config";

const app = defineConfig({
  server: {
    experimental: {
      websocket: true,
    },
  },
});

app.addRouter({
  name: "websocket",
  type: "http",
  handler: "./src/websocket.ts",
  target: "server",
  base: "/_ws",
});

export default app;
