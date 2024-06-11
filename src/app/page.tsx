import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Hero from "./components/Hero";
import YearlyGallery from "./components/YearlyGallery";
import { Wishes } from "./components/Wishes";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-svh">
      <Hero />
      <ContainerScroll
        titleComponent={
          <h1 className="text-balance text-6xl font-semibold text-slate-900">
            A gift for my beloved grumpy grandma
          </h1>
        }
      >
        <iframe
          width="100%"
          height="100%"
          className="aspect-video"
          src="https://www.youtube.com/embed/t0NRBodbQ2U?si=LjSkM9Z41BRzYDKI"
          title="Mayllo's Birthday Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </ContainerScroll>
      <YearlyGallery />
      <Wishes />
      <Footer />
    </main>
  );
}
