"use client";
import { Business } from "@/components/landing/business/Business";
import { Suspense } from "react";

export default function Debug() {
   return (
      <Suspense>
         <Business />
      </Suspense>
   );
}
