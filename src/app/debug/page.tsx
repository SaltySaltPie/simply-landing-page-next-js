'use client'
import { Properties } from "@/components/landing/properties/Properties";
import { Suspense } from "react";

export default function Debug() {
   return (
      <Suspense>
         <Properties />
      </Suspense>
   );
}
