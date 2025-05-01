
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-gray-600">Get in touch with me for inquiries or collaborations.</p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-1/3">
                <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Address</h3>
                    <p className="text-gray-800">123 Design Street, Creativity City, 45678</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Phone</h3>
                    <p className="text-gray-800">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Email</h3>
                    <p className="text-gray-800">hello@lightportfolio.com</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Working Hours</h3>
                    <p className="text-gray-800">Monday - Friday: 9am to 5pm</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h2 className="text-xl font-bold mb-6">Send Me a Message</h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="sr-only">Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="sr-only">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message"
                      placeholder="Your Message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-medium rounded-md transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
