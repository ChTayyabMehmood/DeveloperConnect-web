const FeatureCard = ({ title, description, icon }) => {
  return (
    // Added 'group' for hover logic and 'transition' for smoothness
    <div className="group p-6 bg-bg-surface border border-border-default rounded-xl hover:border-border-hover transition-all duration-300 hover:-translate-y-1">
      {/* Icon Box: Uses group-hover to light up when the CARD is hovered */}
      <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>

      {/* Changed h1 to h3 for semantic correctness */}
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>

      {/* Added leading-relaxed for better readability */}
      <p className="text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
