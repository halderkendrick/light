
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="relative h-[300px]">
          <div className="w-full h-full overflow-hidden">
            <img 
              src="/lovable-uploads/0d2f1542-3bc6-4e7c-b3db-4c8337bf0505.png" 
              alt="Portfolio Banner" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-lg bg-white/80 backdrop-blur-sm p-8 rounded-lg">
                <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
                <p className="text-gray-600">Explore our latest works and projects.</p>
              </div>
            </div>
          </div>
        </section>
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
