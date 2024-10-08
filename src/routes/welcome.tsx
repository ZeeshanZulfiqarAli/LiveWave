import { useNavigate } from "@solidjs/router";
import { animate } from "motion";
import { onMount } from "solid-js";
import { appRoutes } from "~/constants/approutes";

const WelcomePage = () => {
  let myButton: HTMLButtonElement;
  const navigate = useNavigate();

  onMount(() => {
    animate(
      myButton,
      { scale: [0.8, 1, 0.8] },
      { duration: 2, repeat: Infinity, easing: "linear" }
    );
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

          <p class="text-white mt-2 text-center">Listeners: 0</p>
          <p class="text-white mt-2 text-3xl text-center">🥲</p>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
