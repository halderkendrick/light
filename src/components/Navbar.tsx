
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-medium">
            Light
          </Link>
          <nav>
            <ul className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wide text-gray-500">
              <li><Link to="/" className="hover:text-black">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-black">Portfolio</Link></li>
              <li><Link to="/pages" className="hover:text-black">Pages</Link></li>
              <li><Link to="/shortcodes" className="hover:text-black">Shortcodes</Link></li>
              <li><Link to="/blog" className="hover:text-black">Blog</Link></li>
              <li><Link to="/about" className="hover:text-black">About Me</Link></li>
              <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
            </ul>
            
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden flex items-center">
                  <Menu className="h-6 w-6" />
                  <span className="ml-2">Menu</span>
                </button>
              </SheetTrigger>
              <SheetContent className="w-[80%]">
                <div className="mt-8 flex flex-col">
                  <Link 
                    to="/" 
                    className="py-3 px-4 text-lg hover:bg-gray-100 rounded-md"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/portfolio" 
                    className="py-3 px-4 text-lg hover:bg-gray-100 rounded-md"
                  >
                    Portfolio
                  </Link>
                  <Link 
                    to="/pages" 
                    className="py-3 px-4 text-lg hover:bg-gray-100 rounded-md"
                  >
                    Pages
                  </Link>
                  <Link 
                    to="/shortcodes" 
                    className="py-3 px-4 text-lg hover:bg-gray-100 rounded-md"
                  >
                    Shortcodes
                  </Link>
                  <Link 
                    to="/blog" 
                    className="py-3 px-4 text-lg hover:bg-gray-100 rounded-md"
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/about" 
                    className="py-3 px-4 text-lg hover:bg-gray-100 rounded-md"
                  >
                    About Me
                  </Link>
                  <Link 
                    to="/contact" 
                    className="py-3 px-4 text-lg hover:bg-gray-100 rounded-md"
                  >
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
