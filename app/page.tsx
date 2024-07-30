import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import { GrStatusInfo } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative text-3xl bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "About", link: "#about", icon: <GrStatusInfo /> },
            {
              name: "Services",
              link: "#services",
              icon: <MdMiscellaneousServices />,
            },
            { name: "Projects", link: "#projects", icon: <FaComputer /> },
            {
              name: "Contact",
              link: "#contact",
              icon: <IoMailUnreadOutline />,
            },
          ]}
        />
        <Hero />
        <Grid />
        <Services />
        <Process />
        <Projects />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
