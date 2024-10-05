import { createStore } from "solid-js/store";

// Initialize store
export const [globalStore, setGlobalStore] = createStore<{
  ws: WebSocket | undefined;
  socketOpen: boolean;
}>({
  ws: undefined,
  socketOpen: false, // For tracking readyState cause I need it
});
