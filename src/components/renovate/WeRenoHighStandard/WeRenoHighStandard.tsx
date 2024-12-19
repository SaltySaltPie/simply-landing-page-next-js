"use client";
import { icons_we_renovate } from "@/utils/icon";
import { Process } from "@/components/process/Process";
export const WeRenoHighStandard = () => {
   return <Process steps={steps} header="High standards" />;
};

const steps = [
   {
      title: "Create Safe and Clean Homes",
      content:
         "Ensuring that homes meet and exceed safety, cleanliness, and habitability of housing. This includes adhering to and surpassing HUD's nSpire checklist, which sets the benchmark for livability and safety in affordable housing.",
      image: icons_we_renovate.high["high1"],
   },
   {
      title: "Renovate Above Market Standards",
      content:
         "Exceeding typical renovation standards ensures that homes are not just functional but desirable. This approach often involves using higher-quality materials and finishes, which provide long-term durability and reduce maintenance costs, making the homes more attractive to tenants.",
      image: icons_we_renovate.high["high2"],
   },
   {
      title: "Long-Term Focus for Livability and Safety",
      content:
         "Value engineering emphasizes creating homes that are not just suitable for today but built to last. This long-term focus on livability and safety ensures that the properties remain viable and desirable for years to come.",
      image: icons_we_renovate.high["high3"],
   },
];
