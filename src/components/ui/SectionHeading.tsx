import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, id, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 max-w-3xl sm:mb-14", className)}>
      <h2 id={id} className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-100 [text-wrap:balance] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
