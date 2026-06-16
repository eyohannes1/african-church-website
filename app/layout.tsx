import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://africanfestivalmass.org";
const title = "African Festival/Mass 2026 | NAAC Phoenix Chapter";
const description =
  "Support African Festival/Mass 2026 at St. Helen Catholic Parish in Glendale, Arizona. A free celebration of faith, African culture, gospel music, cuisine, and community.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "African Festival/Mass 2026",
  alternates: {
    canonical: "/"
  },
  keywords: [
    "African Mass 2026",
    "African Festival Phoenix",
    "NAAC Phoenix Chapter",
    "African Catholics Arizona",
    "St. Helen Catholic Parish Glendale",
    "African cultural festival Arizona"
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "NAAC Phoenix Chapter",
    images: [
      {
        url: "/assets/community-hero.png",
        width: 1448,
        height: 1086,
        alt: "NAAC Phoenix Chapter community gathered outside St. Helen Catholic Parish"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/community-hero.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
