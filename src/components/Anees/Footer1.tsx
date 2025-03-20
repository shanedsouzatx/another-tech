import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Footer1() {
  // Services links
  const services = [
    "Custom Software Development",
    "Android App Development",
    "iPhone App Development",
    "Web Development",
    "Game Development",
    "Mobile App Support",
    "Startup App Development",
    "Flutter App Development",
    "Cross Platform App Development",
    "React Native App Development",
  ]

  // Solutions links
  const solutions = [
    "Automotive App Development",
    "On-Demand App Development",
    "Real Estate App Development",
    "IT Staff Augmentation",
    "Healthcare App Development",
    "Ecommerce App Development",
    "Music App Development",
  ]

  // About Us links
  const aboutUs = ["About", "TekRevol", "Blogs", "Location", "Referral", "Program", "Press"]

  // Locations
  const locations = ["HOU", "ATX", "DTX", "SF", "MIA", "CHI", "NYC", "DC", "LA", "DXB", "QA", "BH", "KSA", "LDN"]

  // Footer links
  const footerLinks = ["Terms and Conditions", "Privacy Policy", "Contact Us"]

  // Social media icons
  const socialMedia = [
    {
      name: "Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-black w-5 h-5"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
    {
      name: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-black w-5 h-5"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ),
    },
    {
      name: "YouTube",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-black w-5 h-5"
        >
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      ),
    },
    {
      name: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-black w-5 h-5"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-black w-5 h-5"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-black text-white max-w-[1920px] mx-auto ">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <p className="text-lg mb-2">Have a Project To Discuss?</p>
        <h2 className="text-5xl font-bold mb-8">We are ready!</h2>
        <Link
          href="#"
          className="border border-[#FF5C00] text-[#FF5C00] hover:bg-[#FF5C00] hover:text-white transition-colors duration-300 rounded-full px-8 py-3"
        >
          LETS CONNECT!
        </Link>
      </div>

      {/* Main Footer Links */}
     {/* Main Footer Links */}
     
    <div className="w-full bg-black text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 px-4">
          {/* Services Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Custom Software Development</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Android App Development</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">iPhone App Development</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Web Development</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Game Development</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Mobile App Support</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Startup App Development</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Flutter App Development</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Cross Platform App Development</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">React Native App Development</Link></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Automotive App Development</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">On-Demand App Development</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Real Estate App Development</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">IT Staff Augmentation</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Healthcare App Development</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Ecommerce App Development</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Music App Development</Link></li>
            </ul>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">About Us</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">TekRevol</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Blogs</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Location</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Referral</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Program</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Press</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="text-2xl font-bold mb-6">Useful links</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">TekRevol</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Blogs</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Location</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Referral</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Program</Link></li>
              <li><Link href="#" className="hover:text-[#FF5C00] transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      {/* Locations Section */}
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold mb-6">Locations</h3>  
        <div className="flex flex-wrap gap-2 mb-8">
          {locations.map((location, index) => (
            <React.Fragment key={`location-${index}`}>
              <Link href="#" className="hover:text-[#FF5C00] transition-colors">
                {location}
              </Link>
              {index < locations.length - 1 && <span className="mx-2">|</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Link href="tel:+1800-362-9239" className="hover:text-[#FF5C00] transition-colors">
            +1 800-362-9239
          </Link>
          <span className="hidden md:inline">|</span>
          <Link href="mailto:info@tekrevol.com" className="hover:text-[#FF5C00] transition-colors">
            info@tekrevol.com
          </Link>
        </div>

        {/* DMCA Badge */}
        <div className="mb-8">
          <Image
            src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-09.png?ID=a0f7c7c2-7e7c-4c7e-9d97-ef519f87b69f"
            alt="DMCA Protected"
            width={132}
            height={32}
          />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
          <p className="mb-4 md:mb-0">© TekRevol 2025. All rights reserved</p>

          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            {footerLinks.map((link, index) => (
              <React.Fragment key={`footer-link-${index}`}>
                <Link href="#" className="hover:text-[#FF5C00] transition-colors">
                  {link}
                </Link>
                {index < footerLinks.length - 1 && <span className="hidden md:inline">|</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="flex gap-4">
            {socialMedia.map((social, index) => (
              <Link href="#" aria-label={social.name} key={`social-${index}`}>
                <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
                  {social.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Button */}
      {/* <div className="fixed bottom-4 right-4 z-50">
        <button
          className="bg-[#FF5C00] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[#e05200] transition-colors"
          aria-label="Chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div> */}
    </footer>
  )
}
