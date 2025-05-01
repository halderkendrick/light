
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PortfolioSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
