
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <button className="md:hidden">Menu</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
