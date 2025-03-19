import { FeatureSteps } from "@/components/Services/Section2/FeatureSection"
const features = [
  { 
    step: 'Step 1', 
    title: 'Understand Your Brand & Audience',
    content: 'We dive deep into your brand’s identity, target audience, and goals to craft tailored content that resonates.',
    image: '/services/ser1.webp' // Image of a strategy meeting or brainstorming session
  },
  { 
    step: 'Step 2',
    title: 'Create Engaging & SEO-Optimized Content',
    content: 'Our expert writers produce compelling, search-engine-friendly content designed to boost visibility and engagement.',
    image: '/services/ser2.jpg' // Image of a writer typing or content creation in progress
  },
  { 
    step: 'Step 3',
    title: 'Refine & Publish with Precision',
    content: 'We meticulously edit, optimize, and format content for maximum impact before publishing it on your platform.',
    image: '/services/ser3.jpg' // Image of a person reviewing content or publishing online
  },
]

export function FeatureStepsDemo() {
  return (
      <FeatureSteps 
        features={features}
        title="Your Journey Starts Here"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
        className="pt-28"
      />
  )
}