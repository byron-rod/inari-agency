import Image from "next/image";
import { pricing } from "@/data";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const PricingList = () => {
  return (
    <section>
      <h1 className="heading mb-10">
        Our <span className="text-[#DD977A]">Prices</span>
      </h1>
      <div className="flex gap-[1rem] max-lg:flex-wrap">
        {pricing.map((item) => (
          <div
            key={item.id}
            className="w-[19rem] max-lg:w-full h-full lg:basis-1/3 px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h2]:first:text-[#ffc876] [&>h2]:even:text-[#ac6aff] [&>h2]:last:text-[#ff776f]"
          >
            <h2 className="h4 mb-4">{item.title}</h2>

            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
              {item.description}
            </p>

            <div className="flex items-center h-[4.5rem] mb-6 md:mb-2 justify-center">
              {item.price && (
                <>
                  <div className="text-[2.5rem]">$</div>
                  <div className="text-[4.5rem] leading-none font-bold">
                    {item.price}
                  </div>
                </>
              )}
            </div>
            <div className="md:flex w-full mb-6 justify-center">
              <a href="mailto:connect@inari-agency.com">
                <MagicButton
                  title="Get Started"
                  icon={<FaLocationArrow />}
                  position="right"
                  className="justify-center w-full"
                />
              </a>
            </div>

            <ul>
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start py-5 border-t border-n-6"
                >
                  <Image src="/check.svg" width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingList;
