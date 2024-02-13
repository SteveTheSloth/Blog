"use server";

import { redirect } from "next/navigation";

async function navigate({ action }: { action: string }) {
  // Redirect user to the success page with search parameter according to performed action.

  redirect(`/posts/success?action=${action}`);
}
export default navigate;
