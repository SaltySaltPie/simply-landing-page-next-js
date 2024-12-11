import type { Metadata } from "next";
import "./globals.scss";
import { Footer } from "@/components/footer/Footer";
import { Suspense } from "react";
import { WeNav } from "@/components/we/WeNav/WeNav";
import { LaPaNav } from "@/components/LaPaNav/LaPaNav";

export const metadata: Metadata = {
   title: "Simply Homes",
   description:
      "providing a hassle-free, competitive cash offer for your home as-is, helping you move forward with confidence",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <head>
            <link rel="icon" href="/simply-icon-rgb-circle-sun.svg" type="image/svg+xml" />
         </head>
         <body>
            <Suspense>
               {process.env.MODE === "landing" ? <LaPaNav /> : <WeNav />}
               {children}
               <Footer />
            </Suspense>
         </body>
      </html>
   );
}
