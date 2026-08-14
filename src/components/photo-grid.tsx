"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { photos } from "@/content/site";

type Photo = (typeof photos)[number];

export default function PhotoGrid() {
  const [expanded, setExpanded] = useState<Photo | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // ponytail: native <dialog> hands us Esc, focus trapping and ::backdrop for free.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (expanded) dialog.showModal();
    else dialog.close();
  }, [expanded]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const closeOnBackdrop = (event: MouseEvent) => {
      if (event.target === dialog) setExpanded(null);
    };

    dialog.addEventListener("click", closeOnBackdrop);
    return () => dialog.removeEventListener("click", closeOnBackdrop);
  }, []);

  return (
    <>
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.src} className="photo-grid__item">
            <button
              type="button"
              className="photo-grid__button"
              onClick={() => setExpanded(photo)}
              aria-label={`Expand photo: ${photo.caption}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={1000}
                className="photo-grid__img"
              />
            </button>
            <p className="photo-grid__caption">{photo.caption}</p>
          </div>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={() => setExpanded(null)}
      >
        {expanded && (
          <figure className="lightbox__figure">
            <button
              type="button"
              className="lightbox__close"
              onClick={() => setExpanded(null)}
              aria-label="Close photo"
            >
              ✕
            </button>
            <Image
              src={expanded.src}
              alt={expanded.alt}
              width={1600}
              height={2000}
              className="lightbox__img"
            />
            <figcaption className="lightbox__caption">
              {expanded.caption}
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
