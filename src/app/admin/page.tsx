"use client";

import { useEffect, useState } from "react";
import { projects } from "@/lib/data";

type HeroMap = Record<
  string,
  { renderingIndex: number; photoIndex: number }
>;

const ADMIN_PW = "Bridget1208!";

export default function AdminPage() {
  const [heroes, setHeroes] = useState<HeroMap>({});
  const [saving, setSaving] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);

  // Load current selections
  useEffect(() => {
    if (!authed) return;
    fetch("/api/heroes")
      .then((r) => r.json())
      .then((data) => {
        setHeroes(data);
        setLoaded(true);
      });
  }, [authed]);

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

  if (!authed) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (pw === ADMIN_PW) {
              setAuthed(true);
              setPwError(false);
            } else {
              setPwError(true);
            }
          }}
          className="text-center space-y-4"
        >
          <p className="text-charcoal/30 text-xs tracking-widest uppercase">
            Admin
          </p>
          <input
            type="password"
            value={pw}
            onChange={(e) => { setPw(e.target.value); setPwError(false); }}
            placeholder="Password"
            className="block mx-auto w-64 px-4 py-2.5 border border-paper-dark rounded bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-charcoal/20"
            autoFocus
          />
          {pwError && (
            <p className="text-red-500 text-xs">Incorrect password</p>
          )}
          <button
            type="submit"
            className="text-xs tracking-widest uppercase text-charcoal/50 hover:text-charcoal transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <p className="text-charcoal/40 text-sm tracking-wide">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <p className="text-charcoal/30 text-xs tracking-widest uppercase mb-2">
            Admin
          </p>
          <h1 className="font-bold tracking-tight text-3xl sm:text-4xl text-charcoal">
            Hero Image Picker
          </h1>
          <p className="text-charcoal/50 mt-3 max-w-lg text-sm leading-relaxed">
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
                className="border-t border-paper-dark pt-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="font-bold tracking-tight text-xl text-charcoal">
                    {project.title}
                  </h2>
                  {isSaving && (
                    <span className="text-[10px] tracking-widest uppercase text-charcoal/30">
                      Saving...
                    </span>
                  )}
                </div>

                {/* Renderings */}
                <div className="mb-6">
                  <p className="text-charcoal/40 text-xs tracking-widest uppercase mb-3">
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
                              ? "ring-2 ring-charcoal opacity-100 scale-[1.02]"
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
                  <p className="text-charcoal/40 text-xs tracking-widest uppercase mb-3">
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
                              ? "ring-2 ring-charcoal opacity-100 scale-[1.02]"
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
