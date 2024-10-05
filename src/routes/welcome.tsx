import { useNavigate } from "@solidjs/router";
import { animate } from "motion";
import { createEffect, createSignal, onMount, Show } from "solid-js";
import { appRoutes } from "~/constants/approutes";
import { globalStore } from "~/store";

const WelcomePage = () => {
  let myButton: HTMLButtonElement;
  const navigate = useNavigate();
  const [users, setUsers] = createSignal<number | null>(null);

  onMount(() => {
    animate(
      myButton,
      { scale: [0.8, 1, 0.8] },
      { duration: 2, repeat: Infinity, easing: "linear" }
    );
  });

  createEffect(() => {
    if (!globalStore?.ws) return;

    globalStore.ws.onopen = () => {
      globalStore?.ws?.send("user-count");
    };

    globalStore?.ws?.addEventListener("open", (event) => {
      globalStore?.ws?.send("getUsers");
    });

    globalStore?.ws?.addEventListener("message", (event) => {
      console.log("SENT MSG:", JSON.parse(event.data) ?? event.data);
      console.log(event);

      if (JSON.parse(event.data).eventname === "getUsers") {
        setUsers(JSON.parse(event.data).users);
      }
    });
  });

  return (
    <>
      <div class="relative min-h-screen bg-gradient-to-bl from-cyan-500 to-blue-900">
        <div class="absolute inset-0 bg-black bg-opacity-40" />
        <div class="absolute inset-0 grid place-content-center">
          <button
            class="border-2 px-6 py-2 rounded-md border-white bg-transparent"
            ref={(el) => {
              myButton = el;
            }}
            onClick={() => {
              // CONDITION HERE MAYBE
              navigate(appRoutes.prepareToParty);
            }}
          >
            <p class="font-bold text-white text-3xl">Begin</p>
          </button>

          <Show when={users()}>
            <p class="text-white mt-2 text-center">Listeners: {users()}</p>
            <div class="text-white mt-2 text-5xl text-center">
              <div class="animate-spin">🕺</div>
              <div class="animate-bounce pt-3">🪩</div>
            </div>
          </Show>

          <Show when={users() === 0}>
            <p class="text-white mt-2 text-center">Listeners: {users()}</p>
            <p class="text-white mt-2 text-3xl text-center">🥲</p>
          </Show>
        </div>
      </div>

      <div
        onClick={() => {
          globalStore?.ws?.send("HELLO");
        }}
      >
        Emit
      </div>
    </>
  );
};

export default WelcomePage;
