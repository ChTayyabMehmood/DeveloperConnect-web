import React from "react";

const companies = [
  { name: "Vercel", weight: "font-bold tracking-tighter" },
  { name: "Stripe", weight: "font-bold tracking-tight" },
  { name: "Linear", weight: "font-semibold tracking-wide" },
  { name: "Figma", weight: "font-bold italic" },
  { name: "Shopify", weight: "font-bold" },
];

const TrustedBySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 bg-bg-app">
      <p className="text-center text-xs font-mono uppercase tracking-widest text-text-tertiary mb-10">
        Engineers from top companies use our network
      </p>

      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16">
        {companies.map((company) => (
          <span
            key={company.name}
            className={`text-2xl text-text-primary/50 hover:text-text-primary transition-colors duration-300 cursor-default ${company.weight}`}
          >
            {company.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TrustedBySection;
