import { createFileRoute, redirect } from "@tanstack/react-router";

/** The Squarespace site served the homepage at /home — keep that URL alive. */
export const Route = createFileRoute("/home")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
});
