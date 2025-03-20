'use client';
import Navbar2 from "@/components/Anees/Navbar2";
import Hero2 from "@/components/Anees/Hero2";
import BannerSlider1 from "@/components/Anees/BannerSlider1";
import StickySection1 from "@/components/Anees/StickySection1";
import Accordian1 from "./Accordian1";
import BusinessSection1 from "@/components/Anees/BusinessSection1";
import Portfolio1 from "@/components/Anees/Portfolio1";
import Pricing1 from "@/components/Anees/Pricing1";
import Footer1 from "@/components/Anees/Footer1";
import TechnologiesSection from "@/components/Anees/TechnologiesSection";
import Testimonials1 from "@/components/Anees/Testimonials1";
import CountSection1 from "@/components/Anees/CountSection1";
/* eslint-disable react/no-unescaped-entities */
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
import ContactForm from "@/components/Anees/ContactForm";


export default function Anees(){
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

  return(
<>

<Navbar2/>
<section
        className="pt-11 pb-16 bg-no-repeat bg-cover md:pt-16 md:pb-32"
        style={{
        }}
        // backgroundImage: `url(${heroBgImgSrc})`,
        >
        <Hero2/>

        <div className="pt-9">
        <BannerSlider1/>
        </div>
<StickySection1/>
      </section>
      <Accordian1/>
      <BusinessSection1
        subHeading="CUSTOM WEB DESIGN AND MARKETING SOLUTIONS FOR BUSINESS GROWTH"
        isPhoneIcon={true}
        para="Boost your business with a customized website and digital marketing strategy! At Tech Craft, we're home to seasoned designers, developers, and digital marketing experts who are focused on delivering results with excellence. Ready to reinforce your online presence and drive more traffic to your website? Let's discuss. We are just a text away."
        btnText="(667) 423-5532"
      />
      <Portfolio1/>
      <Pricing1/>
      <TechnologiesSection/>
      <Testimonials1/>
      <CountSection1/>
<ContactForm/>
      <Footer1/>
      <Modal isOpen={isModalOpen} onClose={() => closeModal(setIsModalOpen)} />
</> 
    )
}

