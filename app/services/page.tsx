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
          <h1 className="heading mb-16">
            Our <span className="text-purple">Services</span>
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-orange-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs md:max-w-[35rem]">
            <h2 className="text-left text-balance text-2xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
              Modern Web Applications & Websites
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              We craft modern web applications using the best technologies.
              Unlike typical WordPress sites, our websites are built with the
              latest frameworks and libraries, ensuring they are fast,
              responsive, and SEO-friendly. Experience the difference with our
              state-of-the-art web solutions.
            </p>
          </div>
          <Image
            src="/brainwave.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80 text-left text-balance text-2xl md:text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
            Minimalistic UX/UI Design
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis amet nam id qui, vero harum repudiandae natus iure
            debitis obcaecati maxime recusandae consequuntur voluptas ea?
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm md:max-w-3xl">
            <h2 className="max-w-sm md:max-w-2xl  text-left text-balance text-2xl md:text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
              We seemlesly blend design and technology to bring your ideas to
              life.
            </h2>
            <p className="mt-4 max-w-[26rem] md:max-w-3xl text-left  text-base/6 text-neutral-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ea.
              Soluta harum eveniet incidunt, voluptate sit saepe aut odit, unde
              quaerat porro animi esse magni alias quia pariatur aliquid odio
              nostrum. Fugiat quam, aut, sint alias quasi porro architecto rerum
              quaerat fugit, itaque magnam nisi autem magni libero deserunt ex?
            </p>
          </div>
          <Image
            src="/b5.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 min-h-[300px] bg-cyan-800">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            On-Page SEO
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            molestias eveniet unde et hic odit excepturi eum cupiditate modi
            consequatur est voluptas reiciendis corrupti iste, praesentium
            voluptatem alias illum quia in fugiat! Suscipit, ut voluptatum!
          </p>
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-1 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Off-Page SEO
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              accusantium ducimus, dignissimos corporis nesciunt dolorem
              voluptates quidem laborum repudiandae eos..
            </p>
          </div>
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-1 h-full bg-orange-900 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Technical SEO
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              omnis aliquid quaerat a cum, ea voluptas exercitationem
              consequuntur perferendis sunt nihil nam, quae quod commodi
              consequatur animi unde numquam quibusdam?
            </p>
          </div>
        </WobbleCard>
      </div>
    </section>
  );
};

export default Services;
