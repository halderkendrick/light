
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: "all", name: "All" },
  { id: "programming", name: "Programming" },
  { id: "illustration", name: "Illustration" },
  { id: "wordpress", name: "Wordpress" },
  { id: "photography", name: "Photography" },
  { id: "development", name: "Development" },
];

const portfolioItems = [
  {
    id: 1,
    title: "Creative Brochure Design",
    category: "illustration",
    image: "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    size: "normal"
  },
  {
    id: 2,
    title: "3D Helmet Mockup",
    category: "development",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    size: "normal"
  },
  {
    id: 3,
    title: "Coffee Cup Design",
    category: "photography",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    size: "normal"
  },
  {
    id: 4,
    title: "Stand Mockup Design",
    category: "illustration",
    image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 5,
    title: "Phone Case Design",
    category: "development",
    image: "https://images.unsplash.com/photo-1591815302525-756a9bcc3425?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 6,
    title: "Coffee Cup Branding",
    category: "photography",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    size: "normal"
  },
  {
    id: 7,
    title: "Business Cards",
    category: "wordpress",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    size: "normal"
  },
  {
    id: 8,
    title: "Product Packaging",
    category: "programming",
    image: "https://images.unsplash.com/photo-1585683040033-f5f7c3022ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    size: "normal"
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center space-x-2 overflow-x-auto pb-2 text-gray-500">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-link ${activeCategory === category.id ? "active-category" : ""}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className={item.size === "large" ? "portfolio-grid-item-large" : ""}>
              <Link to={`/portfolio/${item.id}`} className="block overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-medium">View Project</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-sm uppercase tracking-wide hover:underline"
          >
            View More <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
