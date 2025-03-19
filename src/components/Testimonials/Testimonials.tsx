"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Award, TrendingUp, ThumbsUp, Sparkles } from "lucide-react"
import Image from "next/image"

// Testimonial Design 1: Modern Cards with Profile Images and Marquee Effect
const TestimonialDesign1 = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Working with this team has completely transformed our online presence in ways I couldn't have imagined. The attention to detail, creative solutions, and strategic thinking exceeded our expectations at every turn. Our engagement metrics have increased by 300% and our conversion rate has doubled since launching the new platform. I've worked with many agencies over my 15-year career, but none have delivered results like this team. They're not just service providers, they're true partners in our success.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "Innovate Inc",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The level of professionalism and technical expertise is absolutely outstanding. Our project was delivered on time and the results speak for themselves. What impressed me most was how they anticipated challenges before they arose and had solutions ready. The team's ability to translate our complex requirements into an intuitive user experience was remarkable. Since implementing their solution, our customer satisfaction scores have increased by 45% and our team's productivity has improved dramatically. I can't recommend them highly enough!",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "CEO",
      company: "StartUp Vision",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "As a startup founder, finding the right partner was crucial for our success. This team understood our vision from day one and helped us bring it to life beautifully. They didn't just execute our ideas - they enhanced them with their expertise and insight. The collaborative process was seamless, and they were always available to address our concerns. Thanks to their work, we secured our next round of funding and have seen user adoption rates far exceeding our projections. They've been instrumental in our journey from concept to market leader.",
    },
    {
      id: 4,
      name: "Alexander Wright",
      role: "CTO",
      company: "Future Systems",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "I've been in tech for over 20 years, and I can confidently say this team delivers some of the most elegant, scalable solutions I've ever seen. Their code quality is impeccable, their architecture decisions are forward-thinking, and their ability to solve complex technical challenges is unmatched. They seamlessly integrated with our internal teams and elevated everyone's performance. The systems they built have handled 10x our expected load without a hiccup. They're the rare combination of technical brilliance and excellent communication.",
    },
    {
      id: 5,
      name: "Olivia Martinez",
      role: "Creative Director",
      company: "Design Collective",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "As someone with an eye for design, I have incredibly high standards. This team not only met those standards but redefined what I thought was possible. The attention to visual detail while maintaining perfect functionality created an experience that our users absolutely love. The animations are butter-smooth, the interactions are intuitive, and the overall aesthetic perfectly captures our brand essence. We've received countless compliments from users and industry peers alike. This team has helped us set a new benchmark in our industry.",
    },
  ]

  const containerRef = useRef(null)
  const [duplicatedTestimonials, setDuplicatedTestimonials] = useState([...testimonials, ...testimonials])

  return (
    <div className="py-16 px-4 md:px-8 bg-white overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Our clients success is our success. Here is what they have to say about working with our award-winning team.
      </p>

      <div className="relative w-full overflow-hidden py-4" ref={containerRef}>
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 40,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 min-w-[350px] max-w-[350px] whitespace-normal inline-block"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(85, 22, 177, 0.2), 0 10px 10px -5px rgba(85, 22, 177, 0.1)",
                borderColor: "#5516B1",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 relative">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#5516B1] opacity-20"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  ></motion.div>
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-[#5516B1] relative z-10"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic line-clamp-6 hover:line-clamp-none transition-all duration-300">
                {testimonial.content}
              </p>
              <div className="mt-6 flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.3, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Star className="h-5 w-5 text-[#5516B1] fill-[#5516B1]" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-8">
        <motion.button
          className="px-6 py-2 bg-[#5516B1] text-white rounded-full font-medium hover:bg-[#4512A0] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Testimonials
        </motion.button>
      </div>
    </div>
  )
}

// Testimonial Design 2: Quote-Style with Large Quotation Marks and Staggered Animation
const TestimonialDesign2 = () => {
  const testimonials = [
    {
      id: 1,
      name: "David Wilson",
      role: "Creative Director",
      company: "Design Masters",
      content:
        "The collaborative approach and attention to detail resulted in a website that perfectly captures our brand essence. What sets this team apart is their ability to listen deeply and translate our vision into something even better than we imagined. The strategic thinking behind every design decision has resulted in a 78% increase in time spent on our site and a significant boost in customer engagement. They didn't just deliver a website; they delivered a complete digital experience that has transformed how our customers perceive our brand.",
    },
    {
      id: 2,
      name: "Jessica Park",
      role: "E-commerce Manager",
      company: "Retail Innovations",
      content:
        "Our conversion rates increased by an astounding 45% after the redesign. The user experience improvements were exactly what we needed, but what we didn't expect was how deeply the team would understand our customers' psychology. They identified pain points in our funnel that we hadn't recognized and implemented solutions that dramatically improved our metrics across the board. The attention to mobile optimization resulted in a 60% increase in mobile conversions specifically. I've never worked with a more insightful, data-driven team that also brings creative excellence to the table.",
    },
  ]

  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <div className="py-16 px-4 md:px-8 bg-gray-50" ref={ref}>
      <motion.h2
        className="text-3xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        Client Testimonials
      </motion.h2>
      <motion.p
        className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
        }}
      >
        Do not just take our word for it. Here is what our clients have to say about their experiences.
      </motion.p>
      <div className="max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="mb-16 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.3 + index * 0.2,
                  type: "spring",
                  stiffness: 100,
                },
              },
            }}
          >
            <motion.div
              className="absolute -top-10 left-0 text-[#5516B1] opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Quote size={80} />
            </motion.div>
            <motion.div
              className="bg-white rounded-xl p-10 md:p-12 shadow-lg relative z-10"
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(85, 22, 177, 0.25)",
                y: -5,
                backgroundColor: "rgba(255, 255, 255, 0.95)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div
                className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#5516B1]/10 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <p className="text-xl md:text-2xl font-light text-gray-700 mb-8 relative z-10 leading-relaxed">
                {testimonial.content}
              </p>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.div
                  className="h-px w-12 bg-[#5516B1] mr-4"
                  whileHover={{ width: 60, backgroundColor: "#7a42d9" }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Testimonial Design 3: Grid with Ratings and Enhanced Hover Effects
const TestimonialDesign3 = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "CTO",
      company: "Tech Innovators",
      rating: 5,
      icon: <TrendingUp className="h-5 w-5" />,
      content:
        "The development team delivered a robust solution that scaled with our rapid growth. Exceptional work! What impressed me most was how they future-proofed our architecture. When our user base suddenly grew by 500% after a successful product launch, the system didn't even flinch. Their technical expertise saved us from what could have been a catastrophic scaling issue. The team's proactive communication and transparent development process made complex technical decisions easy to understand for our non-technical stakeholders.",
    },
    {
      id: 2,
      name: "Sophia Lee",
      role: "Marketing VP",
      company: "Global Brands",
      rating: 5,
      icon: <Heart className="h-5 w-5" />,
      content:
        "Our digital marketing campaigns saw a 200% increase in engagement after implementing their recommendations. The team's deep understanding of our target audience and creative approach to content strategy transformed our brand perception in the market. They didn't just execute our ideas - they challenged us to think bigger and bolder. The data-driven approach to campaign optimization meant we saw continuous improvement month over month. I've never worked with a more strategic and results-focused team.",
    },
    {
      id: 3,
      name: "Robert Garcia",
      role: "Operations Director",
      company: "Logistics Pro",
      rating: 5,
      icon: <Award className="h-5 w-5" />,
      content:
        "The custom dashboard they built has streamlined our operations and given us valuable insights we never had before. Our team's efficiency has improved by 35%, and we've been able to identify cost-saving opportunities worth millions annually. The intuitive interface means even our less tech-savvy team members can leverage powerful data visualization tools. What started as a simple reporting tool evolved into a mission-critical system that gives us a competitive edge. Their understanding of our complex logistics processes was impressive.",
    },
    {
      id: 4,
      name: "Olivia Kim",
      role: "UX Designer",
      company: "Creative Solutions",
      rating: 5,
      icon: <ThumbsUp className="h-5 w-5" />,
      content:
        "As a designer myself, I have extremely high standards. This team exceeded them in every way imaginable. Their design thinking process was thorough and insightful, resulting in user experiences that are both beautiful and highly functional. The collaborative workshops they facilitated helped align our entire organization around user-centered design principles. Since implementing their design system, our product development velocity has increased by 40%, and user satisfaction scores have reached all-time highs. They've transformed how we approach design as an organization.",
    },
  ]

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  return (
    <div className="py-16 px-4 md:px-8 bg-[#f8f5ff]" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mb-4"
        >
          <div className="bg-[#5516B1] text-white p-3 rounded-full">
            <Sparkles className="h-6 w-6" />
          </div>
        </motion.div>
        <motion.h2
          className="text-3xl font-bold text-center mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Success Stories
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-4 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Hear from our clients about their experiences working with our award-winning team.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#5516B1] group relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.6,
              delay: 0.2 + index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(85, 22, 177, 0.1), 0 10px 10px -5px rgba(85, 22, 177, 0.04)",
            }}
          >
            <motion.div
              className="absolute -right-12 -bottom-12 w-40 h-40 bg-[#5516B1]/5 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div
              className="absolute right-0 top-0 w-20 h-20 bg-[#5516B1]/5 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />

            <div className="flex mb-4 relative z-10">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.5 + i * 0.1,
                    type: "spring",
                  }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Star
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-[#5516B1] fill-[#5516B1]" : "text-gray-300"}`}
                  />
                </motion.div>
              ))}
            </div>

            <div className="relative z-10">
              <p className="text-gray-700 mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                {testimonial.content}
              </p>

              <motion.div
                className="flex justify-between items-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
                <motion.div
                  className="h-10 w-10 rounded-full bg-[#5516B1] text-white flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(85, 22, 177, 0.5)",
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  {testimonial.icon}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Testimonial Design 4: Enhanced Carousel Style with 3D Effects
const   TestimonialDesign4 = () => {
  const testimonials = [
    {
      id: 1,
      name: "James Wilson",
      role: "Founder",
      company: "StartUp Success",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The strategic approach to our brand positioning helped us secure our Series A funding. Couldn't be happier with the results! The team took the time to truly understand our business model and target market, creating a compelling narrative that resonated with investors. Their holistic approach encompassed everything from our pitch deck design to our digital presence. What impressed me most was how they translated complex technical concepts into clear, compelling messaging that non-technical investors could understand and get excited about. Within three months of working together, we closed a $5M funding round with terms that exceeded our expectations.",
    },
    {
      id: 2,
      name: "Emily Chen",
      role: "Marketing Director",
      company: "Global Reach",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Our international campaign was a huge success thanks to their cultural insights and technical expertise. Launching simultaneously in 12 markets is no small feat, but the team navigated the complexities with remarkable skill. They developed a framework that allowed for cultural customization while maintaining brand consistency. The campaign generated 3.2M qualified leads and resulted in a 267% ROI within the first quarter. Their ability to coordinate across time zones and adapt to regional nuances was impressive. We've tried other global agencies before, but none have delivered the combination of strategic thinking and flawless execution that this team provides.",
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "E-commerce Lead",
      company: "Retail Future",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The e-commerce platform they built has transformed our business. Sales are up 75% year-over-year, and our customer satisfaction scores have never been higher. The team's deep understanding of user behavior and conversion optimization resulted in a seamless shopping experience that customers love. The custom recommendation engine they developed has increased our average order value by 40%, and the streamlined checkout process reduced cart abandonment by 65%. Beyond the impressive metrics, what I value most is how they've become true partners in our growth. They continually monitor performance and proactively suggest improvements that keep us ahead of the competition.",
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "Head of Product",
      company: "Tech Innovators",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Working with this team has been the best decision we made for our product development. They brought a level of expertise and creativity that completely elevated our vision. The user research they conducted uncovered insights that fundamentally changed our product strategy for the better. Their iterative design process and rapid prototyping allowed us to validate concepts quickly and pivot when needed. Since launching the redesigned product, our user acquisition costs have decreased by 40% while retention has improved by 60%. The team's collaborative approach made them feel like an extension of our internal team rather than an outside agency.",
    },
    {
      id: 5,
      name: "Daniel Kim",
      role: "CEO",
      company: "NextGen Solutions",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "I've worked with many agencies and consultants over my 20-year career, but this team stands in a league of their own. Their strategic vision, technical excellence, and commitment to results have made them invaluable partners in our growth journey. They don't just execute tasks – they think deeply about our business challenges and opportunities. The digital transformation initiative they led increased our operational efficiency by 35% and created new revenue streams that now account for 28% of our business. Their ability to align technology solutions with business objectives is unparalleled. If you're looking for a team that will truly invest in your success, look no further.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction:any) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction:any) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -45 : 45,
      transition: {
        duration: 0.5,
      },
    }),
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-[#5516B1] to-[#7a42d9] text-white overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
            className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center"
          >
            <Quote className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Our clients achieve extraordinary results. Here are some of their stories.
          </p>
        </motion.div>

        {/* Background decorative elements */}
        <motion.div
          className="absolute top-40 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <div className="relative perspective-1000">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 md:p-12 shadow-2xl relative z-10"
            >
              <motion.div
                className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#9c6dff] flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  boxShadow: [
                    "0 0 0 rgba(156, 109, 255, 0.4)",
                    "0 0 20px rgba(156, 109, 255, 0.6)",
                    "0 0 0 rgba(156, 109, 255, 0.4)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Sparkles className="h-6 w-6 text-white" />
              </motion.div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-[#9c6dff] rounded-full blur-md"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                    }}
                  />
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={120}
                    height={120}
                    className="rounded-full border-2 border-white relative z-10"
                  />
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <Quote className="h-12 w-12 mb-4 text-[#9c6dff]" />
                    <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed">
                      {testimonials[currentIndex].content}
                    </p>
                    <div>
                      <h3 className="font-bold text-xl">{testimonials[currentIndex].name}</h3>
                      <p className="text-white/80">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-12 gap-4">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-10 bg-white" : "w-3 bg-white/40"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Testimonial Design 5: Minimalist with Advanced Animations and Marquee
const TestimonialDesign5 = () => {
  const testimonials = [
    {
      id: 1,
      name: "Thomas Wright",
      role: "CEO",
      company: "Future Finance",
      content:
        "The fintech solution developed by the team has revolutionized how we process transactions. Our processing time decreased by 80% while accuracy improved to 99.9%. The intuitive dashboard gives our team real-time insights that have transformed our decision-making process. What impressed me most was how they translated complex financial requirements into an elegant, user-friendly system that both our technical and non-technical staff find easy to use. The ROI on this project exceeded our projections by 300% within the first year.",
    },
    {
      id: 2,
      name: "Aisha Patel",
      role: "Head of Design",
      company: "Creative Collective",
      content:
        "As designers ourselves, we have extremely high standards. This team exceeded them in every way imaginable. Their design process was thorough, collaborative, and insightful. They didn't just execute our vision - they enhanced it with their expertise and creative thinking. The design system they created has become the foundation of our brand expression across all channels. It's flexible enough to evolve with our needs yet consistent enough to maintain our brand integrity. Working with them has elevated our entire approach to design thinking.",
    },
    {
      id: 3,
      name: "Carlos Rodriguez",
      role: "VP of Sales",
      company: "Global Solutions",
      content:
        "Our sales team now has the tools they need to succeed thanks to the custom CRM implementation. The system they built integrates seamlessly with our existing workflow while adding powerful new capabilities that have increased our close rate by 45%. The mobile optimization means our field sales team can access critical information in real-time during client meetings. The automated reporting has saved our managers 15 hours per week while providing deeper insights into our pipeline. This solution has been a game-changer for our entire sales organization.",
    },
    {
      id: 4,
      name: "Zoe Williams",
      role: "CMO",
      company: "Brand Innovators",
      content:
        "The rebranding project exceeded all our expectations. The team took the time to truly understand our company's history, values, and aspirations before creating a brand identity that perfectly captures who we are and where we're going. The comprehensive brand guidelines they delivered have made implementation seamless across all our touchpoints. Since launching the new brand, we've seen a 60% increase in brand recognition metrics and a 40% improvement in customer perception scores. Their strategic approach to branding has delivered measurable business results.",
    },
    {
      id: 5,
      name: "Ryan Chen",
      role: "Product Director",
      company: "Tech Pioneers",
      content:
        "The product strategy workshop they facilitated was transformative for our organization. In just three days, they helped us align our vision, identify our core value propositions, and map out a product roadmap that the entire company could rally behind. Their ability to ask the right questions and synthesize diverse perspectives into a coherent strategy is remarkable. The frameworks they introduced have become essential tools in our product development process. Six months after implementing the roadmap, we've launched two successful products and have a clear path for future innovation.",
    },
  ]

  const marqueeVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  }

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  return (
    <div className="py-16 px-4 md:px-8 bg-white overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Trusted by industry leaders</h2>
          <p className="text-gray-600 max-w-md">
            Our clients range from startups to Fortune 500 companies across various industries.
          </p>
        </motion.div>

        {/* Marquee effect for logos */}
        <motion.div
          className="mb-16 py-8 bg-gray-50 rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div className="flex gap-12 items-center" variants={marqueeVariants} animate="animate">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex items-center gap-12 min-w-max">
                <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-bold">
                  LOGO
                </div>
                <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-bold">
                  LOGO
                </div>
                <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-bold">
                  LOGO
                </div>
                <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-bold">
                  LOGO
                </div>
                <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-bold">
                  LOGO
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                type: "spring",
                stiffness: 50,
              }}
            >
              <motion.div
                className="absolute inset-0 bg-[#5516B1] opacity-0 group-hover:opacity-5 rounded-xl transition-all duration-500"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(85, 22, 177, 0.25)",
                }}
              />
              <motion.div
                className="border border-gray-200 rounded-xl p-8 group-hover:border-[#5516B1] transition-all duration-300 relative z-10 bg-white"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div
                  className="h-1 w-12 bg-[#5516B1] mb-6 transform origin-left"
                  whileHover={{ scaleX: 2 }}
                  transition={{ duration: 0.3 }}
                />

                <p className="text-gray-700 mb-8 relative group-hover:text-black transition-colors duration-300">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute -top-4 -left-2 text-4xl text-[#5516B1] opacity-20 font-serif"
                  >
                    {/* " */}
                  </motion.span>
                  {testimonial.content}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute -bottom-4 -right-2 text-4xl text-[#5516B1] opacity-20 font-serif"
                  >
                    {/* " */}
                  </motion.span>
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-[#5516B1]/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.2, backgroundColor: "rgba(85, 22, 177, 0.1)" }}
                >
                  <Quote className="h-5 w-5 text-[#5516B1]" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [activeDesign, setActiveDesign] = useState(4)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="flex justify-center mb-8 gap-2 flex-wrap">
          {[1, 2, 3, 4, 5].map((design) => (
            <motion.button
              key={design}
              onClick={() => setActiveDesign(design)}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeDesign === design
                  ? "bg-[#5516B1] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Design {design}
            </motion.button>
          ))}
        </div>

        {activeDesign === 1 && <TestimonialDesign1 />}
        {activeDesign === 2 && <TestimonialDesign2 />}
        {activeDesign === 3 && <TestimonialDesign3 />}
        {/* {activeDesign === 4 && <TestimonialDesign4 />} */}
        {activeDesign === 5 && <TestimonialDesign5 />}
      </div>
    </div>
  )
}

