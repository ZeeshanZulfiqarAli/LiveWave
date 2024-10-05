import { createStore } from "solid-js/store";

// Initialize store
export const [globalStore, setGlobalStore] = createStore<{
  ws: WebSocket | undefined;
}>({
  ws: undefined,
});
