import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 bg-bg-app">
      {/* The Glass Card Container */}
      <div className="relative overflow-hidden rounded-2xl border border-border-default bg-bg-surface/50 backdrop-blur-sm p-12 md:p-20 text-center">
        {/* Optional: Subtle glow behind the card for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-6">
            Ready to upgrade <br />
            your network?
          </h2>

          <p className="text-lg text-text-secondary mb-10 leading-relaxed">
            Join thousands of senior engineers, founders, and technical leads
            who are building the future on DeveloperConnect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Button: High Contrast White */}
            <button className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 px-8 py-3.5 rounded-md text-base font-semibold transition-all flex items-center justify-center gap-2">
              Create Free Account
              <FaArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary Button: Ghost Style */}
            <button className="w-full sm:w-auto text-text-primary hover:text-white px-8 py-3.5 rounded-md text-base font-semibold transition-colors flex items-center justify-center gap-2">
              Book Enterprise Demo
              <FaArrowRight className="w-4 h-4 opacity-50" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
