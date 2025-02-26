import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl px-2 md:px-0">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Webistes",
    count: 500,
  },
  {
    title: "Logos",
    count: 1000,
  },

  {
    title: "Mobile Apps",
    count: 110,
  },
  {
    title: "Ecommerce Websites",
    count: 600,
  },
];
