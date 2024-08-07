"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/WobbleCards";

const Services = () => {
  return (
    <section className="mt-[8rem]">
      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <Image
            src="/inari.webp"
            alt="logo"
            width={165}
            height={56}
            className=""
            priority
          />
          <h1 className="text-5xl lg:text-6xl font-bold mb-16">
            Our <span className="text-purple">Services</span>
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-orange-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-[22rem] md:max-w-[38rem] -mt-3">
            <h2 className="text-left text-balance text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
              Modern Web Applications & Websites
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              The craft of modern web applications using the best technologies.
              Unlike typical WordPress sites, our websites are built with the
              latest frameworks and libraries, ensuring they are fast,
              responsive, and SEO-friendly. Experience the difference with our
              state-of-the-art web solutions.
            </p>
          </div>
          <Image
            src="/stats.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 lg:-right-12 -bottom-[4rem] sm:-bottom-[6.5rem] object-contain rounded-2xl opacity-60"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <div className="-mt-3">
            <h2 className="max-w-80 text-left text-balance text-2xl md:text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
              Minimalistic UX/UI Design
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Less is more. Our design philosophy is centered around minimalism,
              helping us provide a clean, modern, and user-friendly experience.
              We create intuitive interfaces that enhance engagement.
            </p>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm md:max-w-3xl -mt-4 sm:mt-0">
            <h2 className="max-w-sm md:max-w-2xl text-left text-balance text-[1.6rem] leading-[2rem] md:text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
              The perfect fusion of both worlds, digital marketing & web
              development.
            </h2>
            <p className="mt-4 max-w-[26rem] md:max-w-3xl text-left  text-base/6 text-neutral-200">
              A solid foundation on our web development process makes it easier
              to implement SEO strategies that will help your website rank
              higher organically on search engines. Combine that with our
              professional social media marketing, and you have a winning
              formula.
            </p>
          </div>
          <Image
            src="/brainwave.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-16 md:-right-12 -bottom-12 md:-bottom-8 object-contain rounded-2xl opacity-65"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 min-h-[300px] bg-cyan-800">
          <h2 className="max-w-80 text-left text-balance text-3xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white -mt-4 sm:mt-0">
            Search Engine Optimization
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Elevate your online presence with our expert SEO services. We use
            cutting-edge techniques to improve your website's visibility on
            search engines, driving organic traffic and boosting your rankings.
            Our comprehensive approach includes keyword research, on-page
            optimization, technical SEO, and content strategy to ensure your
            site stands out from the competition.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 min-h-[300px] bg-pink-800">
          <h2 className="max-w-80 text-left text-balance text-3xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white -mt-4 sm:mt-0">
            Social Media Management
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Maximize your brand's impact on social media with our tailored
            management services. We create and curate engaging content, manage
            your social media profiles, and interact with your audience to build
            a strong online community. Our strategies are designed to increase
            brand awareness, foster engagement, and drive conversions.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 min-h-[300px] bg-orange-900">
          <h2 className="max-w-80 text-left text-balance text-3xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white -mt-4 sm:mt-0">
            Paid Advertising
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Achieve your marketing goals with our targeted paid advertising
            services. We create and manage campaigns across various platforms,
            including Google Ads, Facebook, and Instagram, to reach your desired
            audience. Our data-driven approach ensures maximum ROI by
            continually optimizing your ads for better performance and higher
            conversion rates.
          </p>
        </WobbleCard>
      </div>
    </section>
  );
};

export default Services;
