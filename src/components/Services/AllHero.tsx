import { Hero } from "@/components/Services/Hero"

export default function AllHero() {
  return (
    <Hero
    title="Website Content Writing That Works for You."
    subtitle="Engaging, SEO-driven content tailored to your brand’s voice. Boost visibility, credibility, and conversions effortlessly."
    image="/gal1.jpg"
    actions={[
      {
        label: "Consult Our Experts",
        href: "#",
        variant: "outline"
      },
      {
        label: "See Our Work",
        href: "#",
        variant: "default"
      }
      ]}
      titleClassName="text-5xl md:text-6xl font-extrabold"
      subtitleClassName="text-lg md:text-xl max-w-[600px]"
      actionsClassName="mt-8"
    />
  );
}
