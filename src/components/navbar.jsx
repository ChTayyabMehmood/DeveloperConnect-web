import logo from "./../assets/logo.png"; // Ensure this path is correct
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-bg-app backdrop-blur-md border-b border-border-default">
      {/* The Container: This ensures alignment with the rest of your site */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={logo}
              alt="DeveloperConnect Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Middle Links: Hidden on mobile, shown on md+ screens */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Platform
          </a>
          <a
            href="#"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Workflow
          </a>
          <a
            href="#"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Enterprise
          </a>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hidden sm:block text-sm font-medium text-text-primary hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="hidden sm:block text-sm font-medium text-text-primary hover:text-white transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
