import Navbar from "@/components/layout/navbar";
import Hero from "@/components/layout/hero";
import Feature from "@/components/layout/feature";
import CallToAction from "@/components/layout/call_to_action";
import OurClients from "@/components/layout/our_clients";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurClients />
      <Feature />
      <CallToAction />
    </>
  );
}
