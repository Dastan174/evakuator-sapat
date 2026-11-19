"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useDesktopMotion } from "@/lib/useDesktopMotion";

/** Inertial scrolling on desktop only (≥1280px, where the mobile menu never opens); phones keep native scroll. */
export function SmoothScroll() {
  const enabled = useDesktopMotion(1280);

  useEffect(() => {
    if (!enabled) return;
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: { offset: -88 } });
    return () => lenis.destroy();
  }, [enabled]);

  return null;
}
