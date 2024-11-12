"use client";

import { app_content } from "@/data/content";
import { useSearchParams } from "next/navigation";

export const useContent = () => {
   const searchParams = useSearchParams();
   const code = searchParams.get("code");
   const content = app_content[code || "default"];
   return { content };
};
