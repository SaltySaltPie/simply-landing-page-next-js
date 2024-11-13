"use client";

import { app_content } from "@/data/content";
import { useSearchParams } from "next/navigation";

export const useContent = () => {
   const searchParams = useSearchParams();
   const code = searchParams.get("code");
   const mode = process.env.MODE || "landing";
   const content = (code && app_content[code]) || app_content[mode];
   return { content };
};
