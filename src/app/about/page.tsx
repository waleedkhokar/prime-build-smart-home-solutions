import type { Metadata } from "next";
import { AboutBlock } from "@/components/HeroAbout";
import ScrollStory from "@/components/ScrollStory";
import { WhatsAppFloat } from "@/components/Chrome";

export const metadata: Metadata = {
  title: "About Prime Build – Building Trust Through Excellence",
  description:
    "Your trusted partner for professional home construction and improvement services in Rawalpindi & Islamabad since 2018.",
};

export default function AboutPage() {
  return (
    <div className="pt-[72px]">
      <AboutBlock />
      <ScrollStory idPrefix="about" />
      <WhatsAppFloat />
    </div>
  );
}
