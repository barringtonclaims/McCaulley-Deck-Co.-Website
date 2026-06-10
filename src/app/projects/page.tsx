import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse our portfolio of custom outdoor builds - from design to finished project.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="section-padding pb-12 sm:pb-16">
        <div className="container-max">
          <div className="max-w-2xl">
            <h1 className="font-bold tracking-tight text-4xl sm:text-5xl text-charcoal">
              Projects
            </h1>
            <p className="text-charcoal/65 mt-4 leading-relaxed">
              Every build starts as a design. Click any project to see the
              full journey from vision to&nbsp;reality.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-8 lg:px-12 pb-20 sm:pb-28">
        <div className="container-max">
          <div className="space-y-20 sm:space-y-28">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
