import FeatureCard from "./FeatureCard";
import { FaGithub, FaFilter, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "GitHub Native",
    description:
      "Sign in with GitHub. We automatically pull your tech stack, top repositories, and contribution graph.",
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Zero Noise Feed",
    description:
      "No influencers, no ads. Just a clean, chronological queue of engineers looking to connect.",
    icon: <FaFilter className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Verified Professionals",
    description:
      "Corporate email verification ensures you are connecting with real engineers, not bots.",
    icon: <FaShieldAlt className="w-5 h-5" />,
  },
];

const FeaturesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 bg-bg-app">
      {/* Header Section */}
      <div className="max-w-2xl mb-16">
        {/* Added uppercase and tracking-wider for that "technical label" look */}
        <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
          Core Features
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
          Designed for deep work, <br />
          not endless scrolling.
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          We stripped away the noise of traditional social networks to build a
          platform that respects your time.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
