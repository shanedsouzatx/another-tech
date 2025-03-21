"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const industries = [
    {
      icon: "🖥️",
      title: "Custom Software Development",
      description: "Crafting scalable, high-performance software solutions tailored to business needs, ensuring seamless functionality and future-ready architecture.",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Building next-gen mobile applications with cutting-edge technologies, optimized for performance, security, and an exceptional user experience.",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions & DevOps",
      description: "Enabling businesses to scale with cloud-native applications, infrastructure automation, and DevOps-driven deployment strategies.",
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Integrating AI-driven automation and machine learning models to enhance decision-making, personalization, and operational efficiency.",
    },
    {
      icon: "🛍️",
      title: "E-Commerce Solutions",
      description: "Developing feature-rich, AI-powered e-commerce platforms that drive engagement, sales, and seamless user experiences.",
    },
    {
      icon: "🔐",
      title: "Cybersecurity & Compliance",
      description: "Implementing advanced security protocols to protect digital assets, ensuring compliance with industry standards and regulations.",
    },
    {
      icon: "🎮",
      title: "Game Development",
      description: "Creating immersive gaming experiences with real-time multiplayer support, stunning graphics, and engaging gameplay mechanics.",
    },
    {
      icon: "📡",
      title: "IoT & Smart Technology",
      description: "Designing and deploying IoT solutions that enhance connectivity, automation, and real-time data analysis across industries.",
    },
  ];
  
  

  const handleNext = () => {
    if (currentIndex + 4 < industries.length) {
      setCurrentIndex(prev => prev + 2)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 2)
    }
  }

  return (
    <div className="bg-gradient-to-b from-[#48128A]  to-[#8B3791] text-white py-16 px-4">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
         Mastering Technology to Build the Future
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg mb-12 max-w-4xl"
        >
         We leverage the latest frameworks, cloud platforms, and AI-driven innovations to develop robust, scalable, and secure applications. Our expertise empowers businesses to stay ahead in an evolving digital landscape.


        </motion.p>

        <div className="relative overflow-hidden">
          <div className="absolute right-0 -top-16 space-x-2">
            <button
              onClick={handlePrev}
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className={`w-6 h-6 ${currentIndex === 0 ? 'opacity-50' : ''}`} />
            </button>
            <button
              onClick={handleNext}
              className="p-2  bg-gradient-to-b from-white via-white to-[#BCBEC0]/70  hover: bg-gradient-to-b from-[#BCBEC0]/70  via-white to-white  rounded-full transition-colors"
              disabled={currentIndex + 4 >= industries.length}
            >
              <ChevronRight className={`w-6 h-6 ${currentIndex + 4 >= industries.length ? 'opacity-50' : ''}`} />
            </button>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            animate={{ x: `${-currentIndex * 25}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                className=" bg-gradient-to-b from-white via-white to-[#BCBEC0]/70  hover: bg-gradient-to-b hover:from-[#BCBEC0]/70  hover:via-white hover:to-white p-6 rounded-lg    transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl text-black font-bold mb-3">{industry.title}</h3>
                <p className="text-gray-700">{industry.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}