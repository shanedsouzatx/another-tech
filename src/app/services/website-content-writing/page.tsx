import BannerSlider from "@/components/BannerSlider";
import Navbar1 from "@/components/Navbar1/Navbar1";
import AllHero from "@/components/Services/AllHero";
import { FeatureStepsDemo } from "@/components/Services/Section2/FeatureStepsDemo";
import CircularGallery from "@/components/Services/Service2/CircularGallery";
import TechStackShowcase from "@/components/Services/TechStackShowcase/TechStackShowcase";
import AgencyStatistics, {
  ClientSatisfaction,
  FeatureCard,
  StatCard,
  StatisticsSection,
  WorldMap,
} from "@/components/Services/Statistics/agency-statistics";
import Testimonials4 from "@/components/Testimonials/Testimonials4";
export default function Home() {
  return (
    <>
      <Navbar1 />
      <AllHero />
      <BannerSlider />
      <FeatureStepsDemo />
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={3} textColor="black" borderRadius={0.05} />
      </div>
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <TechStackShowcase/>
    </main>
      {/* <FeatureStepsDemo/>  */}
      <AgencyStatistics />
      <StatisticsSection />
      <StatCard />
      <ClientSatisfaction />
      <FeatureCard />
      <WorldMap />
      <Testimonials4 />
    </>
  );
}
