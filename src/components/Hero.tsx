
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">I AM LIGHT</h1>
            <p className="text-gray-600 mb-6 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, incididunt mollit, proident laborum voluptatum sequat quft distributor quis tempor amet.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-sm uppercase tracking-wide hover:underline"
            >
              Contact Me <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src="/lovable-uploads/c0c9740b-1243-493d-b41f-b84da4aa0da3.png" 
              alt="Portfolio Hero" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
