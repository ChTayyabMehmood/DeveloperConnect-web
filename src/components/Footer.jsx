import React from "react";
import logo from "./../assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border-default bg-bg-app">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section: Logo + Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <img src={logo} alt="DeveloperConnect" className="h-8 w-auto" />
            <p className="mt-4 text-sm text-text-secondary max-w-xs leading-relaxed">
              The professional network built specifically for software
              engineers. Connect, collaborate, and ship together.
            </p>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
                >
                  Enterprise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Divider + Copyright */}
        <div className="pt-8 border-t border-border-default flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-tertiary">
            &copy; {new Date().getFullYear()} DeveloperConnect, Inc. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
