"use client";
import { WeBuyHero } from "@/components/buy/WeBuyHero/WeBuyHero";
import { LaPaBusiness } from "@/components/landing/LaPaBusiness/LaPaBusiness";
import { Suspense } from "react";

export default function Debug() {
   return (
      <Suspense>
         {/* <div>abc</div> */}
         <WeBuyHero/>
      </Suspense>
   );
}
