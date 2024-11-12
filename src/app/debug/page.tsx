import { Hero } from "@/components/landing/hero/Hero";
import { Suspense } from "react";

export default function Debug() {
   return (
      <Suspense>
         <Hero />
      </Suspense>
   );
}
