import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { StoryScroll } from "@/components/sections/StoryScroll";
import { Pricing } from "@/components/sections/Pricing";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <StoryScroll />
      <Pricing />
      <Gallery />
      <ServiceAreas />
      <Reviews />
      <FAQ />
      <FinalCTA />
    </>
  );
}
