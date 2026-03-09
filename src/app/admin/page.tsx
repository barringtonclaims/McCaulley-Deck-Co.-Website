"use client";

import { useEffect, useState } from "react";
import { projects } from "@/lib/data";

type HeroMap = Record<
  string,
  { renderingIndex: number; photoIndex: number }
>;

export default function AdminPage() {
  const [heroes, setHeroes] = useState<HeroMap>({});
  const [saving, setSaving] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Load current selections
  useEffect(() => {
    fetch("/api/heroes")
      .then((r) => r.json())
      .then((data) => {
        setHeroes(data);
        setLoaded(true);
      });
  }, []);

  const selectHero = async (
    projectId: string,
    type: "renderingIndex" | "photoIndex",
    index: number
  ) => {
    const current = heroes[projectId] || { renderingIndex: 0, photoIndex: 0 };
    const updated = { ...current, [type]: index };

    // Optimistic update
    setHeroes((prev) => ({ ...prev, [projectId]: updated }));
    setSaving(projectId);

    await fetch("/api/heroes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        projectId,
        renderingIndex: updated.renderingIndex,
        photoIndex: updated.photoIndex,
      }),
    });

    setSaving(null);
  };

  if (!loaded) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <p className="text-navy/40 text-sm tracking-wide">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <p className="text-navy/30 text-xs tracking-widest uppercase mb-2">
            Admin
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-navy">
            Hero Image Picker
          </h1>
          <p className="text-navy/50 mt-3 max-w-lg text-sm leading-relaxed">
            Click a design and a photo for each project to set the thumbnail
            that appears on the Projects page. Your selection saves
            automatically.
          </p>
        </div>

        {/* Project list */}
        <div className="space-y-16">
          {projects.map((project) => {
            const hero = heroes[project.id] || {
              renderingIndex: 0,
              photoIndex: 0,
            };
            const isSaving = saving === project.id;

            return (
              <div
                key={project.id}
                className="border-t border-cream-dark pt-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="font-serif text-xl text-navy">
                    {project.title}
                  </h2>
                  {isSaving && (
                    <span className="text-[10px] tracking-widest uppercase text-navy/30">
                      Saving...
                    </span>
                  )}
                </div>

                {/* Renderings */}
                <div className="mb-6">
                  <p className="text-navy/40 text-xs tracking-widest uppercase mb-3">
                    Pick hero design
                  </p>
                  <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                    {project.renderings.map((src, i) => {
                      const isSelected = hero.renderingIndex === i;
                      return (
                        <button
                          key={i}
                          onClick={() =>
                            selectHero(project.id, "renderingIndex", i)
                          }
                          className={`shrink-0 w-36 h-28 sm:w-44 sm:h-32 rounded overflow-hidden transition-all duration-200 ${
                            isSelected
                              ? "ring-2 ring-navy opacity-100 scale-[1.02]"
                              : "opacity-50 hover:opacity-80"
                          }`}
                        >
                          <img
                            src={src}
                            alt={`Design ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Photos */}
                <div>
                  <p className="text-navy/40 text-xs tracking-widest uppercase mb-3">
                    Pick hero photo
                  </p>
                  <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                    {project.photos.map((src, i) => {
                      const isSelected = hero.photoIndex === i;
                      return (
                        <button
                          key={i}
                          onClick={() =>
                            selectHero(project.id, "photoIndex", i)
                          }
                          className={`shrink-0 w-36 h-28 sm:w-44 sm:h-32 rounded overflow-hidden transition-all duration-200 ${
                            isSelected
                              ? "ring-2 ring-navy opacity-100 scale-[1.02]"
                              : "opacity-50 hover:opacity-80"
                          }`}
                        >
                          <img
                            src={src}
                            alt={`Photo ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
