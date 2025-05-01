
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Pages</h1>
            <p className="text-gray-600">Various page templates for your use.</p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="h-40 bg-gray-200 flex items-center justify-center">
                    <span className="text-xl text-gray-400">Page Template {item}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-2">Page Layout {item}</h3>
                    <p className="text-gray-500 text-sm mb-4">
                      A clean and modern layout for displaying your content.
                    </p>
                    <a href="#" className="text-sm text-black hover:text-gray-700 font-medium">
                      View Template →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pages;
