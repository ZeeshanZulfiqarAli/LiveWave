import { redirect } from "@solidjs/router";

export const route = {
  preload() {
    redirect("/welcome");
  },
};

export default function Home() {
  return (
    <>
      <main class="text-center mx-auto text-gray-700 p-4"></main>
    </>
  );
}
