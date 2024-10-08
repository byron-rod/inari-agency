import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaWhatsapp,
} from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      icon: <FaInstagram />,
      url: "https://www.instagram.com/inari.webdev",
      label: "Instagram profile of Inari Agency",
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/company/inari-agency/",
      label: "LinkedIn profile of Inari Agency",
    },
    {
      id: 3,
      icon: <FaFacebook />,
      url: "https://www.facebook.com/inari.webdev",
      label: "Facebook profile of Inari Agency",
    },
    {
      id: 4,
      icon: <FaWhatsapp />,
      url: "https://wa.me/50250188477",
      label: "WhatsApp contact for Inari Agency",
    },
  ];

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full md:flex absolute items-center bottom-1 justify-center min-h-96">
        <Image
          src="/grid.webp"
          alt="grid"
          className="opacity-50"
          width={800}
          height={800}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center text-lg md:text-3xl">
          Reach out and let&apos;s discuss how we can help you achieve your
          goals.
        </p>
        <a href="mailto:connect@inari-agency.com">
          <MagicButton
            title="Contact Us"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center mb-4">
        <p className="md:text-base text-sm md:font-normal font-light mb-4">
          Copyright © 2024{" "}
          <Link
            href="https://www.byronrodriguez.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="cursor-pointer text-[#DD977A]">Inari Agency</span>
          </Link>
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link
              key={info.id}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={info.label}
            >
              <span className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:text-purple">
                {info.icon}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
