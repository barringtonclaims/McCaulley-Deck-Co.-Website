"use client";

import { useEffect, useState, useCallback } from "react";
import type { Project } from "@/lib/data";

interface ProjectLightboxProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectLightbox({
  project,
  onClose,
}: ProjectLightboxProps) {
  // Combine all images: renderings first, then photos
  const allImages = [
    ...project.renderings.map((src) => ({ src, type: "rendering" as const })),
    ...project.photos.map((src) => ({ src, type: "photo" as const })),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  const totalImages = allImages.length;
  const current = allImages[currentIndex];

  // Which phase are we in?
  const isPhotoPhase = current?.type === "photo";
  const renderingCount = project.renderings.length;
  const photoCount = project.photos.length;

  // Index within the current phase
  const phaseIndex = isPhotoPhase
    ? currentIndex - renderingCount + 1
    : currentIndex + 1;
  const phaseTotal = isPhotoPhase ? photoCount : renderingCount;

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalImages - 1));
  }, [totalImages]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(onClose, 250);
  }, [onClose]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleClose, goNext, goPrev]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col transition-opacity duration-250 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/95 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-5 sm:px-8 py-4">
        <div className="flex items-center gap-4">
          <h3 className="text-cream/90 font-serif text-lg sm:text-xl">
            {project.title}
          </h3>
          <span
            className={`text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 ${
              isPhotoPhase
                ? "bg-cream/15 text-cream/70"
                : "bg-cream/15 text-cream/70"
            }`}
          >
            {isPhotoPhase ? "The Build" : "The Vision"}
          </span>
        </div>
        <button
          onClick={handleClose}
          className="text-cream/50 hover:text-cream transition-colors p-1"
          aria-label="Close"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main image area */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-16 pb-4 min-h-0">
        {/* Previous button */}
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className={`absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-200 ${
            currentIndex === 0
              ? "opacity-0 pointer-events-none"
              : "text-cream/50 hover:text-cream hover:bg-cream/10"
          }`}
          aria-label="Previous image"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Image */}
        <div className="max-w-5xl w-full h-full flex items-center justify-center">
          <img
            key={current.src}
            src={current.src}
            alt={`${project.title} — ${current.type === "rendering" ? "design" : "photo"} ${phaseIndex}`}
            className="max-w-full max-h-full object-contain rounded-sm animate-fadeIn"
          />
        </div>

        {/* Next button */}
        <button
          onClick={goNext}
          disabled={currentIndex === totalImages - 1}
          className={`absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-200 ${
            currentIndex === totalImages - 1
              ? "opacity-0 pointer-events-none"
              : "text-cream/50 hover:text-cream hover:bg-cream/10"
          }`}
          aria-label="Next image"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Bottom bar: thumbnail strip + counter */}
      <div className="relative z-10 px-5 sm:px-8 pb-5">
        {/* Counter */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-cream/40 text-xs tracking-wide">
            {isPhotoPhase ? "The Build" : "The Vision"} &middot; {phaseIndex} / {phaseTotal}
          </span>
          <span className="text-cream/30 text-xs tracking-wide">
            {currentIndex + 1} / {totalImages}
          </span>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-1.5 overflow-x-auto scrollbar-hide pb-1">
          {allImages.map((img, i) => {
            const isActive = i === currentIndex;
            const isBoundary = i === renderingCount;

            return (
              <div key={i} className="flex items-center gap-1.5">
                {/* Divider between renderings and photos */}
                {isBoundary && (
                  <div className="w-px h-8 bg-cream/20 mx-1 shrink-0" />
                )}
                <button
                  onClick={() => setCurrentIndex(i)}
                  className={`shrink-0 w-12 h-9 sm:w-14 sm:h-10 rounded-[2px] overflow-hidden transition-all duration-200 ${
                    isActive
                      ? "ring-1 ring-cream/80 opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <img
                    src={img.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
