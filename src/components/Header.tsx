
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-warm border-b border-light-neutral">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-deep-olive font-unna text-2xl font-bold">
          Early
        </Link>
        
        <nav className="flex items-center space-x-8">
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
      </div>
    </header>
  );
};

export default Header;
