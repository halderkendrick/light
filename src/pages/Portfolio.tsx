
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
            <p className="text-gray-600">Explore our latest works and projects.</p>
          </div>
        </section>
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
