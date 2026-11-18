import React from "react";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  statusText?: string;
  className?: string;
}

export function StatusBadge({
  statusText = "На линии • Свободный экипаж в Бишкеке",
  className,
}: StatusBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border",
        "bg-zinc-900/90 text-zinc-300 border-zinc-800 backdrop-blur-md shadow-sm",
        className
      )}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>
      <span>{statusText}</span>
    </div>
  );
}
