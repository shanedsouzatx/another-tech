/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import paymentLogo from "../../public/assets/images/pay-img.png";
import Logo from "../../public/assets/images/tech-craft-logo.png";
import Link from "next/link";
import Location from "./Location/Location";
import { usePathname, useRouter } from "next/navigation"; // Import useRouter
import Contact from "./Contact/Contact"; // Change to default import
const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name,
      email,
      phone,
      service,
      message,
    };

    try {
      const response = await fetch(
        "https://redixtechnologies-4d715954081e.herokuapp.com/api/v1/service-lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        router.push("/thank-you"); // Navigate to Thank You page
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Footer Contact Form */}
      {pathname !== "/blog/" && (
        <div className="my-16">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="flex flex-col items-center" data-aos="zoom-in">
              <h3 className="text-center font-bold text-2xl md:text-4xl">
                Let's Join Forces To Create Memorable Experiences
              </h3>
              <p className="text-gray-500 mt-5 text-sm text-center md:text-base">
                Get in touch today, and let's start shaping the future of your
                online success together.
              </p>
            </div>

          
              <Contact />
            {/* </div> */}
          </div>
        </div>
      )}
    <Location/> 

      {/* Footer */}
      <footer className="bg-[#1B1B1B] py-16 md:py-20 pb-44 md:pb-32 relative">
        <div className="max-w-6xl mx-auto flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0">
          <div className="md:max-w-64 px-4 md:px-0">
            <Link href="/" className="flex items-center cursor-pointer">
              <Image src={Logo} alt="TechCraftLogo" width={190} height={190} />
            </Link>
            {/* <h3 className="text-white font-semibold text-2xl md:pb-2">
              Brand Design
            </h3> */}
            <p className="text-sm text-white my-3 md:my-4">
              Tech Craft is a full-service digital marketing and web design
              agency eager to help you build a robust online presence with
              top-notch digital marketing and custom web development services.
              Build, Attract, Convert, and Grow with Tech Craft!
            </p>
            {/* Icons section */}
            <div className="flex items-center gap-3 mt-4">
              <Link
                href="https://www.facebook.com/techcraftinc0"
                target="_blank"
                className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] flex justify-center items-center  h-10 w-10 rounded-full cursor-pointer"
              >
                <FaFacebook color="#ffffff" size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/techcraftinc/"
                target="_blank"
                className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] flex justify-center items-center  h-10 w-10 rounded-full cursor-pointer"
              >
                <FaInstagram color="#ffffff" size={20} />
              </Link>
              <Link
                href="https://x.com/techcraftinc"
                target="_blank"
                className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] flex justify-center items-center h-10 w-10 rounded-full cursor-pointer"
              >
                <FaTwitter color="#ffffff" size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/tech-craft-inc/"
                target="_blank"
                className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] flex justify-center items-center h-10 w-10 rounded-full cursor-pointer"
              >
                <FaLinkedin color="#ffffff" size={20} />
              </Link>
            </div>
          </div>
          <div className="md:max-w-64 px-4 md:px-0">
            <h3 className="text-white inline-block font-semibold text-2xl pb-1 border-b-2 border-[#5114AE]">
              Other Services
            </h3>
            <ul className="mt-4">
              <li className="pt-1 md:pt-2">
                <Link href="/logo-design" className="text-white text-sm">
                  Logo Design
                </Link>
              </li>
              <li className="pt-1 md:pt-2">
                <Link
                  href="/creative-copywriting"
                  className="text-white text-sm"
                >
                  Creative Copywriting
                </Link>
              </li>
              <li className="pt-1 md:pt-2">
                <Link
                  href="/website-development"
                  className="text-white text-sm"
                >
                  Website Development
                </Link>
              </li>
              <li className="pt-1 md:pt-2">
                <Link href="/digital-marketing" className="text-white text-sm">
                  Digital Marketing
                </Link>
              </li>
              <li className="pt-1 md:pt-2">
                <Link
                  href="/ecommerce-solutions"
                  className="text-white text-sm"
                >
                  Ecommerce Web Solutions
                </Link>
              </li>
              <li className="pt-1 md:pt-2">
                <Link href="/branding" className="text-white text-sm">
                  Branding
                </Link>
              </li>
              <li className="pt-1 md:pt-2">
                <Link href="/video-animation" className="text-white text-sm">
                  Video Animation
                </Link>
              </li>
              <li className="pt-1 md:pt-2">
                <Link href="/mobile-application" className="text-white text-sm">
                  App Design
                </Link>
              </li>
              <li className="pt-1 md:pt-2">
                <Link
                  href="/social-media-marketing"
                  className="text-white text-sm"
                >
                  Social Media Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:max-w-64 px-4 md:px-0 ">
            <h3 className="text-white inline-block font-semibold text-2xl pb-1 border-b-2 border-[#5114AE]">
              Quick Links
            </h3>
            <ul className="mt-4">
              <li className="pt-0 md:pt-2">
                <Link href="/" className="text-white text-sm">
                  Home
                </Link>
              </li>
              <li className="pt-0 md:pt-2 hover:text-blue-500">
                <Link href="/about-us" className="text-white text-sm">
                  About
                </Link>
              </li>
              <li className="pt-0 md:pt-2">
                <Link href="/portfolio" className="text-white text-sm">
                  Portfolio
                </Link>
              </li>
              <li className="pt-0 md:pt-2">
                <Link href="/pricing" className="text-white text-sm">
                  Pricing
                </Link>
              </li>
              <li className="pt-0 md:pt-2">
                <Link href="/contact-us" className="text-white text-sm">
                  Contact Us
                </Link>
              </li>
              <li className="pt-0 md:pt-2">
                <Link href="/blog" className="text-white text-sm">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:max-w-64 px-4 md:px-0">
            <h3 className="text-white inline-block font-semibold text-2xl pb-1 border-b-2 border-[#5114AE]">
              Contact Details
            </h3>
            <ul className="mt-4">
              <li className="pt-1 md:pt-2 text-white text-sm">
                Phone: (667) 423-5532
              </li>
              <li className="pt-1 md:pt-2 text-white text-sm">
                Address: 30 N Gould St Ste R, Sheridan, WY 82801, United States
              </li>
              <li className="pt-1 md:pt-2 text-white text-sm">
                Email: info@techcraftinc.com
              </li>
              <li className="pt-3 md:pt-4">
                <Image
                  src={paymentLogo}
                  alt="pay-img"
                  height={200}
                  width={200}
                  objectFit="contain"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-black absolute bottom-0 w-full">
          <div className="max-w-6xl mx-auto py-6 flex flex-col md:flex-row md:justify-between md:items-center">
            <span className="text-sm mb-3 text-center text-white">
              Tech Craft INC. All Rights Reserved.
            </span>
            <div className="text-white text-center text-sm flex flex-col md:flex-row md:items-center gap-2 md:gap-10">
              <Link href="/refund-policy">Refund Policy</Link>
              <Link href="/terms-and-conditions">Terms of Use </Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
