"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
type Heroprops = {
    className?:any
    gradient?: boolean | any ,
    blur?: boolean | any ,
    title?: string | any ,
    subtitle?: string | any ,
    image?: any | string ,
    actions?: React.ReactNode | any ,
    titleClassName?: string | any ,
    subtitleClassName?: string | any ,
    actionsClassName?: string | any ,
  } 

const Hero = React.forwardRef<HTMLElement, Heroprops>(
  (
    {
      className,
      gradient = true,
      blur = true,
      title,
      subtitle,
      actions,
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-0 flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background ",
          className,
        )}
        {...props}
      >
        {gradient && (
          <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center">
            {blur && (
              <div className="absolute top-0 z-50 h-52 w-screen bg-transparent opacity-10 backdrop-blur-md" />
            )}

            {/* Main glow */}
            <div className="absolute inset-auto z-50 h-52 w-[32rem] -translate-y-[-50%] rounded-full bg-gradient-to-r from-[#DCA6E4] via-[#D9A4E3] to-[#923F68] opacity-80 blur-3xl" />

            {/* Lamp effect */}
            <motion.div
              initial={{ width: "5rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              whileInView={{ width: "16rem" }}
              className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full bg-[#923F68] blur-2xl"
            />

            {/* Top line */}
            <motion.div
              initial={{ width: "10rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              whileInView={{ width: "37rem" }}
              className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-[#1A1634]  "
            />

            {/* Left gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: "10rem" }}
              whileInView={{ opacity: 1, width: "37rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#923F68] via-transparent to-[#923F68] [--conic-position:from_70deg_at_center_top]"
            >
              <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
              <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
            </motion.div>

            {/* Right gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: "10rem" }}
              whileInView={{ opacity: 1, width: "37rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#923F68] [--conic-position:from_290deg_at_center_top]"
            >
              <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
              <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            </motion.div>
          </div>
        )}
<div className="relative z-50 container flex flex-col md:flex-row items-center justify-between px-5 md:px-10 gap-10">
      {/* Left Section - Text Content */}
      <motion.div
        initial={{ x: -100, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="flex-1 flex flex-col items-start text-left space-y-4"
      >
        <h1 className={cn("text-4xl text-[#1E193C] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight")}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-[#403475]">
            {subtitle}
          </p>
        )}
        {actions && actions.length > 0 && (
          <div className="flex gap-4">
            {actions.map((action:any, index:any) => (
              <Button key={index} variant={action.variant || "default"} asChild>
                <Link href={action.href}>{action.label}</Link>
              </Button>
            ))}
          </div>
        )}
      </motion.div>
      
      {/* Right Section - Image */}
      <motion.div
        initial={{ x: 100, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="flex-1"
      >
        <Image 
          src={'/services/info7.png'} 
          alt="Hero Image" 
          width={700} 
          height={500} 
          className=""
        />
      </motion.div>
    </div>
      </section>
    )
  },
)
Hero.displayName = "Hero"

export { Hero }
