import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/components/site/blocks";
import { LocationPage } from "@/components/site/location-page";
import { clinicBySlug } from "@/components/site/locations";

const CLINIC = clinicBySlug("walla-walla")!;

export const Route = createFileRoute("/walla-walla")({
  head: () =>
    pageMeta({
      title: CLINIC.title,
      description: CLINIC.description,
      path: "/walla-walla",
    }),
  component: () => <LocationPage clinic={CLINIC} />,
});
