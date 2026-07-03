import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import logo from "../assets/logo.png";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlices";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("kashif@gmail.com");
  const [password, setPassword] = useState("Kashif@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleLogin = async () => {
    try {
      console.log("button clicked");
      const res = await axios.post(
        `${BASE_URL}/login`,
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      console.log(res.data);
      dispatch(addUser(res.data));
      navigate("/feed");
    } catch (e) {
      console.log(e);
    }
  };

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
          </div>

          {/* Main Branding Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-text-primary mb-4">
                Where engineers
                <br />
                <span className="text-primary">build together.</span>
              </h1>
              <p className="text-text-secondary text-lg max-w-md leading-relaxed">
                Join the professional network designed for deep work. Find
                co-founders, mentors, and collaborators who speak your language.
              </p>
            </div>

            {/* Stylized Terminal Mockup */}
            <div className="bg-bg-surface/80 border border-border-default rounded-lg p-5 max-w-md backdrop-blur-sm shadow-[0_0_80px_-20px_rgba(16,185,129,0.15)]">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border-default">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                <span className="text-xs text-text-tertiary font-mono ml-2">
                  ~/network
                </span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-text-secondary">
                    devconnect find --role "backend" --stack rust,go
                  </span>
                </div>
                <div className="text-text-tertiary text-xs space-y-1">
                  <div>→ Searching network...</div>
                  <div className="mt-2">
                    ✓ Found <span className="text-primary">247 engineers</span>{" "}
                    matching criteria
                  </div>
                  <div>
                    ✓ <span className="text-text-secondary">Sarah C.</span> -
                    Staff Eng @ Stripe{" "}
                    <span className="text-primary">[online]</span>
                  </div>
                  <div>
                    ✓ <span className="text-text-secondary">Marcus J.</span> -
                    Systems @ Cloudflare{" "}
                    <span className="text-text-tertiary">[2h ago]</span>
                  </div>
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

      {/* Right Panel: Login Form  */}
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
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              Sign in to access your network workspace.
            </p>
          </div>

          {/* GitHub OAuth Button */}
          <button className="w-full flex items-center justify-center gap-3 bg-bg-surface hover:bg-bg-elevated border border-border-default text-text-primary px-4 py-2.5 rounded-md text-sm font-medium transition-colors">
            <FaGithub className="w-4 h-4" />
            Continue with GitHub
          </button>

          {/* Divider */}
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-border-default"></div>
            <span className="flex-shrink mx-4 text-xs text-text-tertiary font-mono uppercase tracking-wider">
              or
            </span>
            <div className="flex-grow border-t border-border-default"></div>
          </div>

          {/* Email/Password Form */}
          <form className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-secondary"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="w-full bg-bg-surface border border-border-default rounded-md px-3 py-2 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>

            {/* Password with Toggle */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-text-secondary"
                >
                  Password
                </label>
                <a
                  href="/forgot-password"
                  className="text-xs font-medium text-primary hover:text-primary-hover transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  placeholder="••••••••"
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

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 bg-bg-surface border border-border-default rounded focus:ring-2 focus:ring-primary/50 focus:ring-offset-0 text-primary cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm text-text-secondary cursor-pointer"
              >
                Remember me for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-2.5 rounded-md text-sm transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              onClick={HandleLogin}
            >
              Sign In
              <FiArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-text-secondary">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-semibold text-text-primary hover:text-primary transition-colors"
            >
              Create free account
            </a>
          </p>

          {/* Footer Legal */}
          <div className="pt-8 text-center text-xs text-text-tertiary">
            By signing in, you agree to our{" "}
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

export default Login;
