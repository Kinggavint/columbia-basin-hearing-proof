import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/components/site/blocks";
import { LocationPage } from "@/components/site/location-page";
import { clinicBySlug } from "@/components/site/locations";

const CLINIC = clinicBySlug("kennewick")!;

export const Route = createFileRoute("/kennewick")({
  head: () =>
    pageMeta({
      title: CLINIC.title,
      description: CLINIC.description,
      path: "/kennewick",
    }),
  component: () => <LocationPage clinic={CLINIC} />,
});
