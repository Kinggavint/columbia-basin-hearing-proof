import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/components/site/blocks";
import { LocationPage } from "@/components/site/location-page";
import { clinicBySlug } from "@/components/site/locations";

const CLINIC = clinicBySlug("west-richland")!;

export const Route = createFileRoute("/west-richland")({
  head: () =>
    pageMeta({
      title: CLINIC.title,
      description: CLINIC.description,
      path: "/west-richland",
    }),
  component: () => <LocationPage clinic={CLINIC} />,
});
