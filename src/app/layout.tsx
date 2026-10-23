import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components/Chrome";
import { RevealWatcher } from "@/components/Man";

export const metadata: Metadata = {
  title: "Prime Build – Smart Home Solutions | Rawalpindi & Islamabad",
  description:
    "Professional home construction and improvement services in Rawalpindi & Islamabad — plumbing, electrical, kitchen, tiles, paint, interior and more. Building trust since 2018.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <RevealWatcher />
      </body>
    </html>
  );
}
