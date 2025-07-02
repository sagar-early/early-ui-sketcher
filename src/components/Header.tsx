
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm border-b border-light-neutral">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-deep-olive font-unna text-2xl font-bold">
          Early
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/how-it-works" className="text-rich-brown font-satoshi text-base hover:text-deep-olive transition-colors">
            How It Works
          </Link>
          <Link to="/pricing" className="text-rich-brown font-satoshi text-base hover:text-deep-olive transition-colors">
            Pricing
          </Link>
          <Link 
            to="/" 
            className={`font-satoshi text-base transition-colors ${
              location.pathname === '/' || location.pathname.startsWith('/research')
                ? 'text-deep-olive font-bold' 
                : 'text-rich-brown hover:text-deep-olive'
            }`}
          >
            Research
          </Link>
          <Link to="/login" className="text-rich-brown font-satoshi text-base hover:text-deep-olive transition-colors">
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-deep-olive transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-deep-olive transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-deep-olive transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-warm border-t border-light-neutral">
          <nav className="px-6 py-4 space-y-4">
            <Link 
              to="/how-it-works" 
              className="block text-rich-brown font-satoshi text-base hover:text-deep-olive transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/pricing" 
              className="block text-rich-brown font-satoshi text-base hover:text-deep-olive transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/" 
              className={`block font-satoshi text-base transition-colors ${
                location.pathname === '/' || location.pathname.startsWith('/research')
                  ? 'text-deep-olive font-bold' 
                  : 'text-rich-brown hover:text-deep-olive'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Research
            </Link>
            <Link 
              to="/login" 
              className="block text-rich-brown font-satoshi text-base hover:text-deep-olive transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
