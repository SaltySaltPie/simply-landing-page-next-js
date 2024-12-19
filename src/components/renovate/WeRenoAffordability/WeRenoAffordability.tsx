"use client";
import { icons_we_renovate } from "@/utils/icon";
import { Process } from "@/components/process/Process";
export const WeRenoAffordability = () => {
   return <Process steps={steps} header="Affordability" type="expand" />;
};

const steps = [
   {
      title: "Create Safe and Clean Homes",
      content:
         "Value-engineered renovations aim to make homes accessible and comfortable for tenants, easing their transition and making the spaces more attractive to live in. This approach includes thoughtful design choices that enhance the quality of life for residents.",
      image: icons_we_renovate.affordability["affordability1"],
   },
   {
      title: "Increasing Density through Procurement and Renovation",
      content:
         "As urban density increases, value-engineered renovations help optimize space while maintaining affordability. By procuring and renovating properties with this focus, we contribute to sustainable urban development that benefits both tenants and communities.",
      image: icons_we_renovate.affordability["affordability2"],
   },
   {
      title: "Affordability and Section 8 Program Focus",
      content:
         "Value engineering is particularly critical within the Section 8 housing program, where balancing affordability with quality is essential. Driving efficiencies in construction and renovation allows us to keep costs down while still delivering homes that exceed HUD standards.",
      image: icons_we_renovate.affordability["affordability3"],
   },
];
