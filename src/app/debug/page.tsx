"use client";
import { LaPaBusiness } from "@/components/landing/LaPaBusiness/LaPaBusiness";
import { Suspense } from "react";

export default function Debug() {
   return (
      <Suspense>
         <LaPaBusiness />
      </Suspense>
   );
}
