import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Ohmy from "@/components/Ohmy";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Ohmy id="ohmyEvent" green={true} />
      <Ohmy id="ohmyGroup" green={false} />
      <Ohmy id="ohmySoul" green={true} />
      <Ohmy id="ohmyTrip" green={false} />
      <Ohmy id="ohmyDay" green={true} />
      <Ohmy id="ohmySport" green={false} />
      <WhyUs />
      <Footer />
    </main>
  );
}
