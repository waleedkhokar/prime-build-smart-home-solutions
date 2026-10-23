import { AboutBlock, Hero } from "@/components/HeroAbout";
import KitchenScene from "@/components/KitchenScene";
import ScrollStory from "@/components/ScrollStory";
import { ContactRow, Faq, MovingBand, Reviews, Services, WhyChoose } from "@/components/Sections";
import { WhatsAppFloat } from "@/components/Chrome";
import HashScroll from "@/components/HashScroll";

export default function HomePage() {
  return (
    <>
      <HashScroll />
      <Hero />
      <AboutBlock />
      <ScrollStory idPrefix="home" />
      <Services />
      <KitchenScene />
      <WhyChoose />
      <ContactRow />
      <Reviews />
      <Faq />
      <MovingBand />
      <WhatsAppFloat />
    </>
  );
}
