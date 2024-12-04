import Hero from "@/components/layout/hero";
import Feature from "@/components/layout/feature";
// import CallToAction from "@/components/layout/call_to_action";
import OurClients from "@/components/layout/our_clients";
// import Pricing from "@/components/layout/pricing";
import Form from "@/components/layout/form";
import FAQ from "@/components/layout/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <OurClients />
      <Feature />
      <FAQ />
      {/* <Pricing /> */}
      {/* <CallToAction /> */}
      <Form />
    </>
  );
}
