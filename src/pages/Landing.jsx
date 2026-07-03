import Navbar from "../components/navbar";
import HeroComponent from "../components/HeroComponent";
import FeaturesSection from "../components/FeaturesSection";
import Workflow from "../components/Workflow";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import TrustedBySection from "../components/TrustedBySection";
const Landing = () => {
  return (
    <div className="min-h-screen bg-bg-app text-white">
      <Navbar />
      <HeroComponent />
      <TrustedBySection />
      <FeaturesSection />
      <Workflow />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Landing;
