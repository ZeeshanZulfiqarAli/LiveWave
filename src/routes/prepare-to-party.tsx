import { Show } from "solid-js";
import { CommonSelect } from "~/components";
import {
  avatarDropdownOptions,
  userColorOptions,
} from "~/constants/dropdown-options.constants";
import { myUserStore, setMyUserStore } from "~/store";

const PrepareToPartyPage = () => {
  let inputRef: HTMLInputElement;

  const handleAvatarChange = (img: string) => {
    setMyUserStore("avatar", img);
  };

  const handleFrameChange = (color: string) => {
    setMyUserStore("color", color);
  };

  return (
    <>
      <div class="min-h-screen bg-gradient-to-bl from-cyan-400 to-blue-900 flex">
        <div class="w-1/2 p-6 grid place-content-center">
          <div class="bg-slate-50 flex flex-col gap-2 p-12 pt-0 rounded-xl drop-shadow-lg shadow-2xl">
            <h3 class="font-bold text-xl text-center pt-6 pb-4">
              Create Your Profile
            </h3>

            <div class="flex flex-col gap-4">
              <input
                ref={(el) => (inputRef = el)}
                class="w-full drop-shadow-sm border border-black text-black rounded-md min-h-12 px-4 py-2"
                placeholder="Username"
                type="text"
                onKeyUp={() => {
                  setMyUserStore("username", inputRef.value.trim());
                }}
              />

              <div class="w-full drop-shadow-sm border border-black rounded-md">
                <CommonSelect
                  options={avatarDropdownOptions}
                  onChange={handleAvatarChange}
                  placeholder="Select Character"
                />
              </div>

              <div class="w-full drop-shadow-sm border border-black rounded-md">
                <CommonSelect
                  options={userColorOptions}
                  onChange={handleFrameChange}
                  placeholder="Select Color"
                />
              </div>
            </div>

            <div>
              <h3 class="text-sm text-slate-800 mt-4 mb-2">
                Optional: Bring your song to the party
              </h3>
              <input class="text-sm" type="file" />
            </div>
          </div>
        </div>

        <div class="flex flex-col w-1/2 p-6 items-center justify-center">
          <div class="overflow-hidden rounded-md relative">
            <Show when={!myUserStore.avatar}>
              <div class="bg-slate-200 min-w-48 min-h-48 rounded-full" />
            </Show>

            <Show when={myUserStore.avatar}>
              <img
                class="object-fill w-48 h-48 rounded-full"
                src={myUserStore?.avatar}
                alt="userAvatar"
              />
            </Show>
          </div>

          <p
            class="font-extrabold text-center text-2xl mb-4"
            classList={{ [myUserStore.color]: !!myUserStore.color.length }}
          >
            <Show when={myUserStore.username.length}>
              {myUserStore.username}
            </Show>

            <Show when={!myUserStore.username.length}>
              {"<"}Unknown{">"}
            </Show>
          </p>
          <button class="border-2 px-6 py-2 rounded-md border-white bg-transparent w-1/2">
            <p class="font-bold text-white text-3xl">LETS GOOO 🪩</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default PrepareToPartyPage;
