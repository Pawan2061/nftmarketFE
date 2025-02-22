import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <section className="bg-[#28282B] w-full h-full py-6 px-4 md:px-12">
      <Navbar />
      <Hero />
    </section>
  );
}
