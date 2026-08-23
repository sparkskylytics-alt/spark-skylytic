"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SIZE = 110; // px, outer ring diameter
const STROKE = 3;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function Loader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 1050);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Page content mounts immediately and simply sits, dimmed, under the
          loader overlay — no separate entrance animation needed since it's
          revealed by the overlay fading away, not by mounting late. */}
      {children}

      {loading && (
          <div className="fixed inset-0 z-[999] flex animate-[loader-fade_300ms_ease-in_750ms_forwards] items-center justify-center bg-black/45 backdrop-blur-sm">
            <div
              className="relative flex animate-[loader-pop_500ms_ease-out] items-center justify-center"
              style={{ width: SIZE, height: SIZE }}
            >
              {/* soft glow behind the badge */}
              <div className="pointer-events-none absolute h-14 w-14 animate-pulse rounded-full bg-emerald-400/25 blur-xl" />

              {/* ring: track + animated progress arc */}
              <svg
                width={SIZE}
                height={SIZE}
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                className="absolute inset-0 -rotate-90"
              >
                <circle
                  cx={SIZE / 2}
                  cy={SIZE / 2}
                  r={RADIUS}
                  fill="none"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth={STROKE}
                />
                <circle
                  cx={SIZE / 2}
                  cy={SIZE / 2}
                  r={RADIUS}
                  fill="none"
                  stroke="#073f35"
                  strokeWidth={STROKE}
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  className="animate-[loader-ring_900ms_ease-in-out_forwards]"
                  style={{ strokeDashoffset: CIRCUMFERENCE }}
                />
              </svg>

              {/* center badge with logo */}
              <div className="relative z-10 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-white ">
                <Image
                  src="/Logo/loader.png"
                  alt="Spark Skylytics"
                  width={38}
                  height={38}
                  priority
                />
              </div>

              {/* screen-reader only progress announcement */}
              <span className="sr-only">Loading</span>
            </div>
          </div>
      )}
    </>
  );
}
