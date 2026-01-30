import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Legacy from "@/components/Legacy";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Legacy />
        <Services />
        <Gallery />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
