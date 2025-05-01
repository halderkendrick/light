import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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
    featured: true
  },
  {
    id: 2,
    title: "3D Helmet Mockup",
    category: "development",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Coffee Cup Design",
    category: "photography",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 4,
    title: "Stand Mockup Design",
    category: "illustration",
    image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    id: 5,
    title: "Phone Case Design",
    category: "development",
    image: "https://images.unsplash.com/photo-1591815302525-756a9bcc3425?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Coffee Cup Branding",
    category: "photography",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    id: 7,
    title: "Business Cards",
    category: "wordpress",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 8,
    title: "Product Packaging",
    category: "programming",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 9,
    title: "Web Development Project",
    category: "programming",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    id: 10,
    title: "Mobile App Interface",
    category: "development",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    featured: false
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);
    
  // Separate featured and regular items
  const featuredItems = filteredItems.filter(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-4 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id 
                    ? "bg-black text-white" 
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Featured carousel */}
        {featuredItems.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Featured Projects</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {featuredItems.map((item) => (
                  <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="border-none">
                      <CardContent className="p-0">
                        <Link to={`/portfolio/${item.id}`} className="block overflow-hidden group">
                          <div className="relative overflow-hidden aspect-square">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <span className="text-white font-medium">View Project</span>
                            </div>
                          </div>
                          <h4 className="mt-3 font-medium">{item.title}</h4>
                          <p className="text-sm text-gray-500 mt-1">{categories.find(c => c.id === item.category)?.name}</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        )}
        
        {/* Regular grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularItems.map((item) => (
            <div key={item.id}>
              <Link to={`/portfolio/${item.id}`} className="block overflow-hidden group">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-medium">View Project</span>
                  </div>
                </div>
                <h4 className="mt-3 font-medium">{item.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{categories.find(c => c.id === item.category)?.name}</p>
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
