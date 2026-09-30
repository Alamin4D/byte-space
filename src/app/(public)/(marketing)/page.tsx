import LearningPaths from "@/components/learning-paths";
import CourseSection from "../../../components/course-section";
import Hero from "../../../components/Hero";
import FeaturesSplit from "@/components/features-split";
import CreatorCTA from "@/components/creator-cta";
import Testimonials from "@/components/testimonials";
import TrustedLogos from "@/components/trusted-logos";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedLogos />
      <CourseSection />
      <LearningPaths />
      <FeaturesSplit />
      <CreatorCTA />
      <Testimonials />
    </div>
  );
}
