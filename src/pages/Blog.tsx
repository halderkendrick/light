
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-gray-600">Read our latest posts and articles.</p>
          </div>
        </section>
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
