
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-gray-600">Learn more about who I am and what I do.</p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-6">Who I Am</h2>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-6">My Skills</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Graphic Design</span>
                      <span className="text-sm text-gray-500">90%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Web Development</span>
                      <span className="text-sm text-gray-500">85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Photography</span>
                      <span className="text-sm text-gray-500">80%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Marketing</span>
                      <span className="text-sm text-gray-500">75%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: "75%" }}></div>
                    </div>
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

export default About;
