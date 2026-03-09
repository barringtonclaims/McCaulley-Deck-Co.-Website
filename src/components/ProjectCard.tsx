"use client";

import { useState } from "react";
import type { Project } from "@/lib/data";
import heroes from "@/lib/heroes.json";
import ProjectLightbox from "./ProjectLightbox";

type HeroMap = Record<string, { renderingIndex: number; photoIndex: number }>;
const heroMap = heroes as HeroMap;

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const hero = heroMap[project.id];
  const heroRendering = project.renderings[hero?.renderingIndex ?? 0] || project.renderings[0];
  const heroPhoto = project.photos[hero?.photoIndex ?? 0] || project.photos[0];

  return (
    <>
      <article className="group">
        {/* Project header */}
        <div className="mb-6">
          <p className="text-navy/30 text-xs tracking-widest uppercase mb-2">
            Project {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-navy">
            {project.title}
          </h2>
          <p className="text-navy/50 mt-3 leading-relaxed max-w-xl text-sm sm:text-base">
            {project.description}
          </p>
        </div>

        {/* Vision → Build thumbnail */}
        <button
          onClick={() => setLightboxOpen(true)}
          className="w-full text-left cursor-pointer focus:outline-none transition-transform duration-300 group-hover:-translate-y-1"
        >
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {/* The Vision */}
            <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
              <img
                src={heroRendering}
                alt={`${project.title} — design`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute top-3 left-3">
                <span className="text-[10px] tracking-[0.2em] uppercase bg-cream/85 text-navy/70 px-2.5 py-1 backdrop-blur-sm">
                  The Vision
                </span>
              </div>
            </div>

            {/* The Build */}
            <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
              <img
                src={heroPhoto}
                alt={`${project.title} — completed`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute top-3 left-3">
                <span className="text-[10px] tracking-[0.2em] uppercase bg-cream/85 text-navy/70 px-2.5 py-1 backdrop-blur-sm">
                  The Build
                </span>
              </div>
            </div>
          </div>

          {/* Click indicator */}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-navy/40 text-xs tracking-wide">
              {project.renderings.length} designs &middot; {project.photos.length} photos
            </span>
            <span className="text-navy/50 text-xs tracking-wide flex items-center gap-1.5 group-hover:text-navy transition-colors duration-200">
              View project
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </button>
      </article>

      {/* Lightbox */}
      {lightboxOpen && (
        <ProjectLightbox
          project={project}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
