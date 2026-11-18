import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { StoryScroll } from "@/components/sections/StoryScroll";
import { HorizontalGallery } from "@/components/sections/HorizontalGallery";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { Pricing } from "@/components/sections/Pricing";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StoryScroll />
      <Services />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <ServiceAreas />
      <HorizontalGallery />
      <Gallery />
      <Reviews />
      <FAQ />
      <FinalCTA />
    </>
  );
}
