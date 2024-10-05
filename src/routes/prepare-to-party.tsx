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
        <div class="flex flex-col gap-2 w-1/2 p-6 justify-center">
          <input
            ref={(el) => (inputRef = el)}
            class="w-1/2 rounded-md min-h-12 px-4 py-2 text-black"
            placeholder="Username"
            type="text"
            onKeyUp={() => {
              setMyUserStore("username", inputRef.value.trim());
            }}
          />

          <div class="w-1/2">
            <CommonSelect
              options={avatarDropdownOptions}
              onChange={handleAvatarChange}
              placeholder="Select Character"
            />
          </div>

          <div class="w-1/2">
            <CommonSelect
              options={userColorOptions}
              onChange={handleFrameChange}
              placeholder="Select Color"
            />
          </div>

          <div>
            <input type="file" />
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
            <p class="font-bold text-white text-3xl">Enter</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default PrepareToPartyPage;
