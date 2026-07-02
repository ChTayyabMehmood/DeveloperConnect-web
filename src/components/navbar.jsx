import logo from "./../assets/logo.png"; // Ensure this path is correct

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-bg-app/80 backdrop-blur-md border-b border-border-default">
      {/* The Container: This ensures alignment with the rest of your site */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="DeveloperConnect Logo" className="h-8 w-auto" />
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
          <button className="hidden sm:block text-sm font-medium text-text-primary hover:text-white transition-colors">
            Sign In
          </button>
          <button className="bg-white text-black hover:bg-zinc-200 px-4 py-2 rounded-md text-sm font-semibold transition-colors">
            Get Early Access
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
