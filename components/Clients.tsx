"use client";

import React from "react";
import Image from "next/image";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-[#DD977A]"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* <div className="flex flex-col max-lg:mt-10 justify-center mx-auto">
          <div className="flex mb-10 items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold justify-center">
              Our <span className="text-purple">favorite</span> technologies
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-16 items-center justify-center">
            {companies.map((company) => (
              <React.Fragment key={company.id}>
                <div className="flex md:max-w-60 max-w-32 gap-2">
                  <Image
                    src={company.img}
                    alt={company.name}
                    width={30}
                    height={30}
                    className="md:w-10 w-5"
                    loading="lazy"
                  />
                  <Image
                    src={company.nameImg}
                    alt={company.name}
                    width={100}
                    height={40}
                    className="md:w-24 w-20"
                    loading="lazy"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Clients;
