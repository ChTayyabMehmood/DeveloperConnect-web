import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import windowImage from "../assets/windowHeroSection.png";

const HeroComponent = () => {
  return (
    // 1. Added min-h-screen to ensure it takes up full viewport height
    // 2. Removed justify-center so we can control vertical position with padding
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden bg-bg-app pt-32 pb-12">
      {/* 1. THE GRID BACKGROUND */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #27272a 1px, transparent 1px),
            linear-gradient(to bottom, #27272a 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* 2. SUBTLE GLOW EFFECT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-160 h-130 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10 px-6 text-center max-w-5xl mx-auto flex flex-col items-center">
        {/* Badge: Added mb-6 for spacing below it */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border-default bg-bg-surface px-3 py-1.5 text-xs font-mono text-text-secondary mb-6 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          v1.0.0 Beta is now live
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary leading-[1.1]">
          The professional network <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            built for engineers.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Stop swiping. Start shipping. DeveloperConnect replaces noisy social
          feeds with a distraction-free, GitHub-native workspace designed to
          help you find your next co-founder, mentor, or hire.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="rounded-md bg-primary hover:bg-primary-hover text-white px-8 py-3.5 text-base font-semibold transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
            Claim your handle
            <FaArrowRightLong className="w-4 h-4" />
          </button>

          <button className="rounded-md bg-bg-surface hover:bg-bg-elevated border border-border-default text-text-primary px-8 py-3.5 text-base font-semibold transition-all flex items-center gap-2">
            <FaGithub className="w-5 h-5" />
            Sign in with GitHub
          </button>
        </div>

        {/* Image: Added mt-16 to push it further down from the buttons */}
        <img
          src={windowImage}
          alt="Hero Section Window"
          className="w-full max-w-5xl rounded-lg shadow-lg mt-16"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
