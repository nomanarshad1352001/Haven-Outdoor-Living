import type { Metadata } from "next";
import PageHero from "@/components/site/page-hero";
import CtaBand from "@/components/site/cta-band";
import ProjectsGallery from "@/components/projects-gallery";
import { JsonLd } from "@/components/site/seo";
import { site } from "@/lib/site";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Twin Cities Outdoor Living Portfolio",
  description:
    "Patios, pergolas, fire features, gardens, and outdoor rooms built by Haven Outdoor Living across Minneapolis, Edina, Wayzata, Stillwater, North Oaks and the greater Twin Cities.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Haven Outdoor Living projects",
    url: `${site.url}/projects`,
    description:
      "Portfolio of outdoor living projects built across the Twin Cities metro.",
    about: { "@type": "LocalBusiness", "@id": `${site.url}/#business` },
  };

  return (
    <>
      <JsonLd data={collectionLd} />
      <PageHero
        eyebrow="Portfolio"
        lines={[
          "Work we&apos;re proud",
          <>
            to <em className="text-ember">revisit.</em>
          </>,
        ]}
        description="Every project below still gets a seasonal check-in — because the truest test of a build is how it looks in year three, not week one."
      />
      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <ProjectsGallery items={projects} />
      </section>
      <CtaBand
        kicker="Your address could be next"
        title="Let's add your project to this page."
      />
    </>
  );
}
