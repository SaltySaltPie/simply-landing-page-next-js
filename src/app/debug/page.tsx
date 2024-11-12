'use client'
import { Hero } from "@/components/landing/hero/Hero";
import { Process } from "@/components/landing/process/Process";
import { Properties } from "@/components/landing/properties/Properties";
import { Suspense } from "react";

export default function Debug() {
   return (
      <Suspense>
         <Properties />
      </Suspense>
   );
}
