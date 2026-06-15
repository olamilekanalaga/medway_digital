import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://medwaydigital.local"),
  title: {
    default: "Medway Digital | Modern Websites for Local Businesses",
    template: "%s | Medway Digital"
  },
  description:
    "Medway Digital helps local UK service businesses get modern websites, stronger online presence, and practical lead generation foundations.",
  openGraph: {
    title: "Medway Digital",
    description: "Modern websites for plumbers, electricians, roofers, cleaners and local service businesses.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
