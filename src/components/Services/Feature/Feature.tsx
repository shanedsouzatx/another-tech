"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Feature() {
  const [activeCategory, setActiveCategory] = useState("all")
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({
    all: null,
    uiux: null,
    digital: null,
    branding: null,
  })

  const categories = [
    { id: "all", name: "All Work" },
    { id: "uiux", name: "UI/UX Design"  },
    { id: "digital", name: "Digital Marketing" },
    { id: "branding", name: "Branding" },
  ]

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId)

    if (contentRefs.current[categoryId] && scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const element = contentRefs.current[categoryId]

      container.scrollTo({
        left: element.offsetLeft - 24, // Adjust for padding
        behavior: "smooth",
      })
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="min-h-screen  text-white bg-[url('https://res.cloudinary.com/dhggagqst/image/upload/v1742503688/White_Bg-08_rsfc7s.png')] bg-cover bg-center bg-no-repeat -z-50  ">
      <div className="max-w-7xl mx-auto pt-16 pt-20 mt-[100px] p-6 md:p-12 ">
        {/* Large Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 max-w-4xl mx-auto uppercase bg-gradient-to-t from-[#48128A] to-[#8B3791] text-transparent bg-clip-text  ">
          Real-world examples of how we have helped companies achieve their marketing objectives.
        </h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full transition-all",
                activeCategory === category.id
                  ? "text-base font-semibold  border-2 p-1 border-radius-50% rounded-full  cursor-pointer py-2 w-full md:w-44 bg-gradient-to-b from-[#48128A] to-[#8B3791] text-white  relative overflow-visible hover:bg-transparent hover:bg-none hover:text-black hover:border-2 hover:border-[#48128A] "
                  : "text-black text-base border-radius-50%  font-semibold  border-2 border-radius-50% rounded-full cursor-pointer py-2 w-full md:w-44  border-2 border-[#48128A] hover:border-none bg-transparent hover:bg-gradient-to-b from-[#48128A] to-[#8B3791]  hover:text-white transition-colors duration-300",
              )}
            >
              {category.name} 
            </button>
          ))}
        </div>

        {/* Scroll Controls */}
        <div className="relative">
          {/* <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button> */}

          {/* Scrollable Content Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-6 px-6 scrollbar-hide snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* All Work Section */}
            <div 
              ref={(el) => { contentRefs.current.all = el }}
              className="flex-shrink-0 snap-start"
            >
              <div className="w-[280px] h-[280px] bg-gradient-to-b from-[#48128A] to-[#8B3791]  text-white  rounded-full flex items-center justify-center">
                <button className="bg-gradient-to-b from-white via-white to-[#BCBEC0]/70 text-black rounded-full w-24 h-24 flex items-center justify-center font-medium">
                  See Details
                </button>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-900">AI Corporation, 2023</p>
                <h3 className="text-lg text-black font-medium mt-2">AI Wave - AI Chatbot Mobile App</h3>
              </div>
            </div>

            {/* UI/UX Design Section */}
            <div 
              ref={(el) => { contentRefs.current.uiux = el }}
              className="flex-shrink-0 snap-start"
            >
              <div className="w-[280px] h-[280px] bg-gradient-to-b from-[#48128A] to-[#8B3791]  text-white  rounded-xl flex items-center justify-center">
                <div className="p-6">
                  <p className="text-sm text-gray-400">Lancer Corporation, 2023</p>
                  <h3 className="text-lg font-medium mt-2">App Lancer - Freelance Marketplace</h3>
                </div>
              </div>
            </div>

            {/* Digital Marketing Section */}
            <div 
              ref={(el) => { contentRefs.current.digital = el }}
              className="flex-shrink-0 snap-start"
            >
              <div className="w-[280px] h-[280px] bg-gradient-to-b from-[#48128A] to-[#8B3791]  text-white   rounded-xl flex items-center justify-center">
                <div className="p-6">
                  <p className="text-sm text-gray-400">Tech Solutions, 2023</p>
                  <h3 className="text-lg font-medium mt-2">Digital Campaign - 300% ROI Increase</h3>
                </div>
              </div>
            </div>

            {/* Branding Section */}
            <div 
              ref={(el) => { contentRefs.current.branding = el }}
              className="flex-shrink-0 snap-start"
            >
              <div className="w-[280px] h-[280px] bg-gradient-to-b from-[#48128A] to-[#8B3791]  text-white   rounded-xl flex items-center justify-center">
                <div className="p-6">
                  <p className="text-sm text-gray-400">Global Brands, 2023</p>
                  <h3 className="text-lg font-medium mt-2">Brand Refresh - 45% Recognition Increase</h3>
                </div>
              </div>
            </div>

            {/* Additional items */}
            <div className="flex-shrink-0 snap-start">
              <div className="w-[280px] h-[280px] bg-gradient-to-b from-[#48128A] to-[#8B3791]  text-white   rounded-xl flex items-center justify-center">
                <div className="p-6">
                  <p className="text-sm text-gray-400">Startup Inc, 2023</p>
                  <h3 className="text-lg font-medium mt-2">Product Launch Campaign</h3>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 snap-start">
              <div className="w-[280px] h-[280px] bg-gradient-to-b from-[#48128A] to-[#8B3791]  text-white   rounded-xl flex items-center justify-center">
                <div className="p-6">
                  <p className="text-sm text-gray-400">E-commerce Giant, 2023</p>
                  <h3 className="text-lg font-medium mt-2">Conversion Rate Optimization</h3>
                </div>
              </div>
            </div>
          </div>

          {/* <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button> */}
        </div>
      </div>
    </main>
  )
}

