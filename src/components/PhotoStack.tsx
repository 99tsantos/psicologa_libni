"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type PhotoStackPhoto = {
  src: string;
  alt: string;
};

type PhotoStackProps = {
  photos: PhotoStackPhoto[];
  className?: string;
  rotations?: number[];
  offset?: number;
  offsetDirections?: number[];
  nextLabel?: string;
};

const DEFAULT_ROTATIONS = [1, 5, -5, 6];
const DEFAULT_OFFSET_DIRECTIONS = [0, 1, -1, 1];
const EXIT_MS = 450;

export default function PhotoStack({
  photos,
  className,
  rotations = DEFAULT_ROTATIONS,
  offset = 10,
  offsetDirections = DEFAULT_OFFSET_DIRECTIONS,
  nextLabel = "Show next photo",
}: PhotoStackProps) {
  const [order, setOrder] = useState<number[]>(() =>
    photos.map((_, i) => i),
  );
  const [leaving, setLeaving] = useState<number | null>(null);
  const [teleporting, setTeleporting] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const teleportRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (teleportRef.current) clearTimeout(teleportRef.current);
    };
  }, []);

  // Resync when the photo count changes (e.g. 3 -> 4): otherwise a
  // stale order array would leave the new photo stuck at the back,
  // never cycling to the front.
  const count = photos.length;
  useEffect(() => {
    setOrder(Array.from({ length: count }, (_, i) => i));
    setLeaving(null);
    setTeleporting(null);
  }, [count]);

  if (photos.length === 0) return null;

  const cycle = () => {
    if (leaving !== null || order.length === 0) return;
    const top = order[0];
    if (top === undefined) return;
    setLeaving(top);
    timeoutRef.current = setTimeout(() => {
      setOrder((prev) => {
        const [first, ...rest] = prev;
        return first === undefined ? prev : [...rest, first];
      });
      // Teleport the card from the exit pose to the back of the stack
      // with transitions disabled so it never visibly flies backwards.
      setLeaving(null);
      setTeleporting(top);
      teleportRef.current = setTimeout(() => setTeleporting(null), 60);
    }, EXIT_MS);
  };

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={nextLabel}
      title={nextLabel}
      className={`group relative block cursor-pointer select-none bg-transparent p-0 text-left motion-reduce:transition-none ${className ?? ""}`}
    >
      {photos.map((photo, photoIndex) => {
        const position = order.indexOf(photoIndex);
        const pos = position === -1 ? photos.length - 1 : position;
        const rotation = rotations[pos] ?? 0;
        const depthOffset = pos * offset;
        const xDir = offsetDirections[pos] ?? -1;
        const isLeaving = leaving === photoIndex;
        const isTeleporting = teleporting === photoIndex;

        return (
          <span
            key={photo.src + photoIndex}
            aria-hidden={pos !== 0}
            className={`absolute inset-0 block overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-xl motion-reduce:transition-none ${
              isTeleporting
                ? "transition-none"
                : "transition-[transform,opacity] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            }`}
            style={{
              transform: isLeaving
                ? "translate3d(45%, 0, 0) rotate(12deg) scale(1.02)"
                : `rotate(${rotation}deg) translate3d(${depthOffset * xDir}px, ${depthOffset}px, 0) scale(${pos === 0 ? 1 : 0.97})`,
              zIndex: isLeaving ? 100 : (photos.length - pos) * 10,
              opacity: isLeaving || isTeleporting ? 0 : 1,
              filter:
                pos === 0 && !isLeaving
                  ? "none"
                  : `brightness(${1 - pos * 0.05})`,
              willChange: "transform, opacity",
            }}
          >
            <Image
              src={photo.src}
              alt={pos === 0 ? photo.alt : ""}
              fill
              sizes="(max-width: 768px) 16rem, (max-width: 1280px) 20rem, 28rem"
              className="object-cover"
              priority={photoIndex === 0}
            />
          </span>
        );
      })}
      {/* Keeps button height from collapsing since children are absolute */}
      <span aria-hidden className="invisible block h-full w-full" />
    </button>
  );
}
