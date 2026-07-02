import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import logo from "../assets/logo.png";

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-bg-app">
      {/* Left Panel: Branding & Terminal Mockup */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden p-12 flex-col justify-between">
        {/* Grid Background Pattern */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Subtle Glow Effect */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="DeveloperConnect" className="h-8 w-auto" />
            <span className="font-semibold text-lg tracking-tight text-text-primary">
              DeveloperConnect
            </span>
          </div>

          {/* Main Branding Content - Signup Specific Copy */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-text-primary mb-4">
                Build your
                <br />
                <span className="text-primary">developer identity.</span>
              </h1>
              <p className="text-text-secondary text-lg max-w-md leading-relaxed">
                Create a profile in seconds. Add your tech stack, projects, and
                bio later in settings. No friction, just code.
              </p>
            </div>

            {/* Stylized Terminal Mockup - Signup Context */}
            <div className="bg-bg-surface/80 border border-border-default rounded-lg p-5 max-w-md backdrop-blur-sm shadow-[0_0_80px_-20px_rgba(16,185,129,0.15)]">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border-default">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                <span className="text-xs text-text-tertiary font-mono ml-2">
                  ~/onboarding
                </span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-text-secondary">
                    devconnect init --user tayyab --stack react,node
                  </span>
                </div>
                <div className="text-text-tertiary text-xs space-y-1">
                  <div>→ Creating developer profile...</div>
                  <div className="mt-2">✓ Account created successfully</div>
                  <div>✓ Profile ready for customization</div>
                  <div>✓ Welcome to the network, Tayyab!</div>
                  <div className="mt-2 text-zinc-600">
                    $ <span className="animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="pt-8 border-t border-border-default/60">
            <p className="text-xs text-text-tertiary font-mono uppercase tracking-wider mb-4">
              Trusted by engineers from
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 opacity-60">
              <span className="text-sm font-semibold text-text-tertiary">
                Vercel
              </span>
              <span className="text-sm font-semibold text-text-tertiary">
                Stripe
              </span>
              <span className="text-sm font-semibold text-text-tertiary">
                Linear
              </span>
              <span className="text-sm font-semibold text-text-tertiary">
                Shopify
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Signup Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <img src={logo} alt="DeveloperConnect" className="h-8 w-auto" />
            <span className="font-semibold text-lg tracking-tight text-text-primary">
              DeveloperConnect
            </span>
          </div>

          {/* Form Header */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary tracking-tight">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              Join in seconds. Complete your profile later.
            </p>
          </div>

          {/* GitHub OAuth Button */}
          <button className="w-full flex items-center justify-center gap-3 bg-bg-surface hover:bg-bg-elevated border border-border-default text-text-primary px-4 py-2.5 rounded-md text-sm font-medium transition-colors">
            <FaGithub className="w-4 h-4" />
            Sign up with GitHub
          </button>

          {/* Divider */}
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-border-default"></div>
            <span className="flex-shrink mx-4 text-xs text-text-tertiary font-mono uppercase tracking-wider">
              or
            </span>
            <div className="flex-grow border-t border-border-default"></div>
          </div>

          {/* Minimal Data Form: Name + Email + Password Only */}
          <form className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <label
                htmlFor="signup-name"
                className="block text-sm font-medium text-text-secondary"
              >
                Full Name
              </label>
              <input
                type="text"
                id="signup-name"
                name="name"
                placeholder="John Doe"
                required
                minLength={2}
                maxLength={50}
                className="w-full bg-bg-surface border border-border-default rounded-md px-3 py-2 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="signup-email"
                className="block text-sm font-medium text-text-secondary"
              >
                Email address
              </label>
              <input
                type="email"
                id="signup-email"
                name="email"
                placeholder="you@company.com"
                required
                className="w-full bg-bg-surface border border-border-default rounded-md px-3 py-2 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>

            {/* Password with Toggle */}
            <div className="space-y-2">
              <label
                htmlFor="signup-password"
                className="block text-sm font-medium text-text-secondary"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="signup-password"
                  name="password"
                  placeholder="Minimum 8 characters"
                  required
                  minLength={8}
                  className="w-full bg-bg-surface border border-border-default rounded-md px-3 py-2 pr-10 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <FiEyeOff className="w-4 h-4" />
                  ) : (
                    <FiEye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-2.5 rounded-md text-sm transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              Create Account
              <FiArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-sm text-text-secondary">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-text-primary hover:text-primary transition-colors"
            >
              Sign in
            </a>
          </p>

          {/* Footer Legal */}
          <div className="pt-8 text-center text-xs text-text-tertiary">
            By creating an account, you agree to our{" "}
            <a
              href="/terms"
              className="underline hover:text-text-primary transition-colors"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="underline hover:text-text-primary transition-colors"
            >
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
