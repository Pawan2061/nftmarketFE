import Hero from "@/components/Hero";
import Artist from "@/components/Artist";
import Works from "@/components/Works";
export default function Home() {
  return (
    <section className=" w-full h-full py-6 px-4 md:px-12">
      <Hero />
      <Artist />
      <Works />
    </section>
  );
}
