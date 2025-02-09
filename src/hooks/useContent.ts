"use client";

import { app_content } from "@/data/content";
import { useSearchParams } from "next/navigation";

export const useContent = () => {
   const searchParams = useSearchParams();
   const code = searchParams.get("code");
   const content = (code && app_content[code]) || app_content["default"];
   // const content = (code && app_content[code]) || app_content["default"];
   return { content };
};
