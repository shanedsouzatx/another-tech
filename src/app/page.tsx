/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
// import { HeroParallax } from "@/components/ui/hero-parallax";
// import { products } from "@/data/product";
import {
  FaLaptop,
  FaBullhorn,
  FaRocket,
  FaPaintBrush,
  FaRegCheckCircle,
} from "react-icons/fa";
import Location from "@/components/Location/Location";
import Hero from "@/components/Hero/Hero";
import Accordian from "@/components/Accordian";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import {
  logoDesign,
  webDesign,
  eCommerce,
  branding,
  mobileApps,
  motionGraphics,
  illustration,
} from "@/data/porfolios";
import  Testimonials4  from "@/components/Testimonials/Testimonials4";
import BannerSlider from "@/components/BannerSlider";
import GradientButton from "@/components/GradientButton";
import Modal from "@/components/Modal/Modal";
import OutlineButton from "@/components/OulineButton";
import { tabs } from "@/constants/TabsArray";
import { openModal, closeModal } from "@/app/utils/HelperFunction";
import BusinessSection from "@/components/BusinessSection";
import CountSection from "@/components/CountSection";
import PricingSection from "@/components/PricingSection";
// import HeroLottieAnimation from "@/components/HeroLottieAnimation";
import Image from "next/image";
import { heroBgImgSrc } from "@/constants/CloudinaryImgUrl";
import { useScroll, useTransform, motion, animate } from "framer-motion";
import Navbar1 from "@/components/Navbar1/Navbar1";
import Footer from "@/components/Footer";
import Methodology from "@/components/Hero/Methodology/Methodology";
import StickySection from "@/components/Hero/StickySection";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("Analysis");
  const [description, setDescription] = useState(
    "In order to create a strategic strategy that produces results quickly, we start by examining the clients' needs and understanding the demands of the project at hand."
  );
  const [hoveredIcon, setHoveredIcon] = useState("laptop");
  const [activeTab, setActiveTab] = useState("Logo Design");

  // Add these scroll-based animations
  const { scrollYProgress } = useScroll();
  
  const gradientY1 = useTransform(scrollYProgress, [0, 3], [0, 200]);
  const gradientY2 = useTransform(scrollYProgress, [0, 6], [0, -200]);
  const gradientScale = useTransform(scrollYProgress, [0, 5], [1, 1.5]);

  // Add flowing gradient animation variants
  const flowingGradient = {
    animate: {
      x: [0, -100, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 8,
          ease: "linear"
        }
      }
    }
  };

  const handleMouseEnter = (icon: string) => {
    setHoveredIcon(icon);
    switch (icon) {
      case "laptop":
        setTitle("Monitoring and Analysis");
        setDescription(
          "We track the performance and results of the website and marketing campaigns live. We use innovative analytics to monitor key metrics to evaluate what's working and where adjustments are needed."
        );
        break;
      case "bullhorn":
        setTitle("Strategy Development");
        setDescription(
          "We begin by immersing ourselves in your business to understand your objectives, market position, and intended audience. Then, we gather insights through research to develop a strategy that suits your business goals."
        );
        break;
      case "rocket":
        setTitle("Optimization and Growth");
        setDescription(
          "Insights gained from ongoing analysis inform our optimization efforts. We fine-tune strategies and tactics to enhance performance and ensure your digital marketing efforts yield the best results and drive growth for your business."
        );
        break;
      case "paintbrush":
        setTitle("Implementation");
        setDescription(
          "Armed with a solid strategy, we move to implement the strategized digital marketing tactics. This includes website development, SEO, content creation, and PPC campaigns, among others, tailored to your business niche."
        );
        break;
      default:
        break;
    }
  };

  return (
    <>
    <Navbar1/>
      {/* <HeroParallax products={products} /> */}
      {/* Hero section */}
      <section
        className="pt-11 pb-16 bg-no-repeat bg-cover md:pt-20 md:pb-32"
        style={{
          // backgroundImage: `url(${heroBgImgSrc})`,
        }}
      >
        <Hero />
        <div>
         
       <div>

       </div>
        
        </div>
      </section>

      {/* Slider */}
      <BannerSlider />
      <StickySection/>
     {/* methodology */}
     {/* <Methodology/> */}
     {/* <HorizontalScroll/> */}
      {/* ACCORDIAN */}
      <div className="bg-[#EEEEEE] py-16">
        <Accordian />
      </div>
      {/* Grow Business Section */}
      <BusinessSection
        subHeading="Custom Web Design and Marketing Solutions for Business Growth"
        isPhoneIcon={true}
        para="Boost your business with a customized website and digital marketing strategy! At Tech Craft, we're home to seasoned designers, developers, and digital marketing experts who are focused on delivering results with excellence. Ready to reinforce your online presence and drive more traffic to your website? Let's discuss. We are just a text away."
        btnText="(667) 423-5532"
      />
      {/* Portfolio Section*/}
      <div className="py-12 md:py-16 -z-50 bg-[#F9F9F9]">
        {/* Portfolio heading */}
        <div className="max-w-6xl mx-auto px-4 md:px-8" data-aos="zoom-in">
          <h2 className="text-center text-xl md:text-2xl text-[#5114AE] font-semibold">
            Showcase of Success
          </h2>
          <p className="text-center text-sm md:text-base text-[#687087] mb-6 md:mb-8 mt-4 md:mt-6">
            Why rely solely on what we say? Explore our successful portfolio and
            see the excellence for yourself.
            <br className="hidden md:block" />
            Our team brings your creative ideas to life by crafting web designs
            that speak volumes of our creativity and expertise.
          </p>
        </div>
        {/* Portfolio Filter tabs */}
        <div
          className="flex flex-wrap justify-center gap-3 max-w-[1080px] mx-auto mb-6 md:mb-8 px-4 md:px-0"
          data-aos="zoom-in"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative text-sm font-semibold rounded-md cursor-pointer py-2 md:py-3 w-full md:w-36 border border-[#33174E] transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-[#5114AE] to-[#802FCE] bg-transparent hover:bg-gradient-to-r hover:from-[#5114AE] hover:to-[#802FCE]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Portfolio Content */}
        <div className="max-w-[1400px] mx-auto flex flex-wrap my-8 md:my-16 px-4 md:px-0 justify-center md:justify-between">
          {activeTab === "Logo Design" &&
            logoDesign.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} />
            ))}
          {activeTab === "Website Design" &&
            webDesign.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} giveHeight={true} />
            ))}
          {activeTab === "E-Commerce" &&
            eCommerce.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} giveHeight={true} />
            ))}
          {activeTab === "Branding" &&
            branding.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} />
            ))}
          {activeTab === "Mobile Apps" &&
            mobileApps.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} />
            ))}
          {activeTab === "Motion Graphics" &&
            motionGraphics.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} />
            ))}
          {activeTab === "Illustration" &&
            illustration.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} />
            ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 px-4 md:px-0">
          <GradientButton
            text="Let's Get Started"
            onClick={() => openModal(setIsModalOpen)}
          />
          <OutlineButton text="Chat With Us" />
        </div>
      </div>

      {/* Pricing Section */}
      <PricingSection />
      {/* TECHNOLOGIES SECTION */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4" data-aos="zoom-in">
          <h5 className="text-center text-2xl text-[#5114AE] font-semibold uppercase">
            TECHNOLOGIES
          </h5>
          <h4 className="font-bold text-center text-2xl md:text-4xl md:font-semibold mt-2">
            Leveraging Innovative Technologies to Scale Your Growth
          </h4>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 mt-8">
          {/* Image Section */}
          <div className="w-full md:w-[55%] relative" data-aos="fade-right">
            <img
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724877614/4_kiwu6j.webp"
              alt="cta-img"
              className="w-full object-contain z-50"
            />
            <img
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724879111/spiral-img_ib1sr2.png"
              alt="cta-img"
              className="w-[75%] object-contain absolute top-0 left-24 z-50"
            />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-[40%] mt-8 md:mt-0" data-aos="fade-left">
            <h2 className="font-bold md:font-semibold text-2xl md:text-4xl">
              The Creative Web Designs At Tech Craft
            </h2>
            <p className="text-sm md:text-base my-6 max-w-md text-slate-600">
              Let Tech Craft revamp your brand identity to dominate the digital
              world by reinforcing the brand's online presence, streamlining
              your operations, and engaging your target audience more
              effectively. As for now we are leveraging:
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2 border-2 border-white rounded-lg text-slate-600 w-32">
                <FaRegCheckCircle size={15} color="#802FCE" />
                <span>Magento</span>
              </div>
              <div className="flex items-center gap-2 border-2 border-white rounded-lg text-slate-600 w-32">
                <FaRegCheckCircle size={15} color="#802FCE" />
                <span>Shopify</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2 border-2 border-white rounded-lg text-slate-600 w-32">
                <FaRegCheckCircle size={15} color="#802FCE" />
                <span>Wordpress</span>
              </div>
              <div className="flex items-center gap-2 border-2 border-white rounded-lg text-slate-600 w-32">
                <FaRegCheckCircle size={15} color="#802FCE" />
                <span>HTML CSS</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
              <GradientButton
                text="Let's Get Started"
                onClick={() => openModal(setIsModalOpen)}
              />
              <OutlineButton text="Talk To Us" width="w-full md:w-36" />
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials section */}
      <div className="my-0 md:my-16">
        {/* Testimonials Heading */}
        {/* <div className="mb-6" data-aos="zoom-in">
          <h5 className="text-center text-2xl font-bold md:text-3xl text-[#5114AE] md:font-medium ">
            Go through Client Feedbacks
          </h5>
          <h4 className="text-center text-2xl font-bold md:text-4xl md:font-medium mt-2 text-slate-600">
            Testimonials
          </h4>
        </div>
        <Testimonials /> */}
      <Testimonials4/>
      </div>
      {/* Projects Count */}
      <CountSection />
      <Modal isOpen={isModalOpen} onClose={() => closeModal(setIsModalOpen)} />
<Footer/>
    </>
  );
}
