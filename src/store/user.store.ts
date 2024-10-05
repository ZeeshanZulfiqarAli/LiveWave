import { createStore } from "solid-js/store";

export const [myUserStore, setMyUserStore] = createStore<{
  username: string;
  color: string;
  avatar?: string;
}>({
  username: "",
  color: "",
  avatar: undefined,
});
