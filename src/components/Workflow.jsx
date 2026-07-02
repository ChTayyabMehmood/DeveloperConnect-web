const steps = [
  {
    id: "01",
    title: "Review Profiles",
    description:
      "Browse the feed using our split-screen workspace. Scan tech stacks and GitHub activity without leaving the page.",
  },
  {
    id: "02",
    title: "Send Request",
    description:
      "Found someone you want to work with? Send a 'Merge Request'. If they accept, you instantly connect.",
  },
  {
    id: "03",
    title: "Ship Together",
    description:
      "Unlock direct messaging, share private repositories, and start building your next big project together.",
  },
];

const Workflow = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 bg-bg-app">
      {/* Header */}
      <div className="text-center mb-20">
        <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
          The Workflow
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
          From discovery to collaboration.
        </h2>
      </div>

      {/* Steps Container */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* 1. THE CONNECTING LINE (Background Layer) */}
        {/* Hidden on mobile, visible on md+ screens */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-default to-transparent z-0"></div>

        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center relative z-10"
          >
            {/* 2. THE NODE (Circle) */}
            {/* bg-bg-app is CRITICAL here - it covers the line behind it */}
            <div className="w-24 h-24 rounded-full border border-border-default bg-bg-app flex items-center justify-center text-3xl font-mono font-bold text-text-placeholder mb-8">
              {step.id}
            </div>

            {/* 3. THE TEXT CONTENT */}
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              {step.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;
