import type { Metadata } from "next";
import "./globals.scss";
import { Nav } from "@/components/nav/Nav";

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
         <body>
            <Nav />
            {children}
         </body>
      </html>
   );
}
