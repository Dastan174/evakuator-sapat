"use client";

import { useEffect, useState } from "react";

/**
 * True only on wide screens without prefers-reduced-motion.
 * Starts false on server and first client render, so markup always hydrates identically.
 */
export function useDesktopMotion(minWidth = 1024) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia(`(min-width: ${minWidth}px)`);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(wide.matches && !reduce.matches);
    update();
    wide.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, [minWidth]);

  return enabled;
}
