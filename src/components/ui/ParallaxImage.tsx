"use client";

import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useDesktopMotion } from "@/lib/useDesktopMotion";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  sizes: string;
  /** Frame classes: size, aspect ratio, hover group. The frame clips; the photo moves inside it. */
  className?: string;
  style?: CSSProperties;
  imageClassName?: string;
  /** Overscan as a percentage of the frame height on each side; the photo travels exactly that far. */
  amount?: number;
  priority?: boolean;
}

/** Photo drifts slower than its frame while the frame crosses the viewport. Static on phones and under reduced motion. */
export function ParallaxImage({ src, alt, sizes, className, style, imageClassName, amount = 8, priority }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useDesktopMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // translateY % is relative to the layer itself, which is (100 + 2·amount)% of the frame.
  const travel = enabled ? (amount / (100 + 2 * amount)) * 100 : 0;
  // Function form on purpose: range form gets handed to a native ScrollTimeline that freezes the first-render (zero) amplitude.
  const y = useTransform(scrollYProgress, (p) => `${(p * 2 - 1) * travel}%`);

  return (
    <div ref={ref} className={cn("relative overflow-hidden bg-zinc-900", className)} style={style}>
      <motion.div style={{ y, top: `-${amount}%`, bottom: `-${amount}%` }} className="absolute inset-x-0">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", imageClassName)} />
      </motion.div>
    </div>
  );
}
