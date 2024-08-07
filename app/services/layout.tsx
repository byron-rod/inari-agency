import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { GrStatusInfo } from "react-icons/gr";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import Footer from "@/components/Footer";

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative text-3xl bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
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
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default ServicesLayout;
