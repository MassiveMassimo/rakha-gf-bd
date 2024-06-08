import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-svh">
      <Hero />
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-semibold text-slate-900">
            A gift for my beloved grumpy grandma
          </h1>
        }
      >
        <video width="100%" height="100%" controls autoPlay playsInline preload="auto">
          <source src="/birthday.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </ContainerScroll>
    </main>
  );
}
