
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      {/* Full-width banner image */}
      <div className="w-full h-[500px] overflow-hidden">
        <img 
          src="/lovable-uploads/0d2f1542-3bc6-4e7c-b3db-4c8337bf0505.png" 
          alt="Portrait Banner" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-lg bg-white/80 backdrop-blur-sm p-8 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">I AM LIGHT</h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, incididunt mollit, proident laborum voluptatum sequat quft distributor quis tempor amet.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-sm uppercase tracking-wide hover:underline"
            >
              Contact Me <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
