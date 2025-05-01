
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Shortcodes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Shortcodes</h1>
            <p className="text-gray-600">Pre-built components to enhance your content.</p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold mb-4">Buttons</h2>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-medium rounded-md transition-colors duration-300">
                      Primary Button
                    </button>
                    <button className="px-6 py-3 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-md transition-colors duration-300">
                      Secondary Button
                    </button>
                    <button className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-medium rounded-md transition-colors duration-300">
                      Dark Button
                    </button>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Alerts</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-100 text-blue-800 rounded-md">
                      This is an information alert message.
                    </div>
                    <div className="p-4 bg-green-100 text-green-800 rounded-md">
                      This is a success alert message.
                    </div>
                    <div className="p-4 bg-yellow-100 text-yellow-800 rounded-md">
                      This is a warning alert message.
                    </div>
                    <div className="p-4 bg-red-100 text-red-800 rounded-md">
                      This is an error alert message.
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Tabs</h2>
                  <div className="border-b border-gray-200">
                    <div className="flex space-x-8">
                      <button className="py-2 border-b-2 border-yellow-400 text-gray-900 font-medium">
                        Tab 1
                      </button>
                      <button className="py-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700">
                        Tab 2
                      </button>
                      <button className="py-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700">
                        Tab 3
                      </button>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 border-t-0">
                    Tab 1 content goes here. This is some example content.
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold mb-4">Accordions</h2>
                  <div className="space-y-2">
                    <div className="border border-gray-200 rounded-md">
                      <button className="flex justify-between w-full px-4 py-3 font-medium text-left bg-gray-50">
                        <span>Accordion Item 1</span>
                        <span>+</span>
                      </button>
                      <div className="px-4 py-3 border-t border-gray-200">
                        This is the content for accordion item 1. You can put any content here.
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-md">
                      <button className="flex justify-between w-full px-4 py-3 font-medium text-left">
                        <span>Accordion Item 2</span>
                        <span>+</span>
                      </button>
                    </div>
                    <div className="border border-gray-200 rounded-md">
                      <button className="flex justify-between w-full px-4 py-3 font-medium text-left">
                        <span>Accordion Item 3</span>
                        <span>+</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Progress Bars</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Basic Progress</span>
                        <span className="text-sm text-gray-500">75%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-yellow-400 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Advanced Progress</span>
                        <span className="text-sm text-gray-500">50%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: "50%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Expert Progress</span>
                        <span className="text-sm text-gray-500">90%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Icons</h2>
                  <div className="flex flex-wrap gap-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <div key={index} className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-md">
                        <span className="text-gray-500">{index + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shortcodes;
