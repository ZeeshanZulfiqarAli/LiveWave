import { cache, createAsync, redirect } from "@solidjs/router";

const redirectToWelcome = cache(async () => {
  "use server";
  throw redirect("/welcome");
}, "redirect-to-login");

export default function Home() {
  createAsync(() => redirectToWelcome());
  return <></>;
}
