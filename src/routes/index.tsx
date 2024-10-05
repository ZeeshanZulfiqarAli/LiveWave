import { cache, createAsync, redirect } from "@solidjs/router";
import { appRoutes } from "~/constants/approutes";

const redirectToWelcome = cache(async () => {
  "use server";
  throw redirect(appRoutes.welcome);
}, "redirect-to-login");

export default function Home() {
  createAsync(() => redirectToWelcome());
  return <></>;
}
