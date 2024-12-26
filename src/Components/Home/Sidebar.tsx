import { useState } from "react";
import { MdClose, MdLogout } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { IoCodeSlashOutline, IoCloudOutline, IoCallOutline, IoChevronDownOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const primaryMenu = [
  { id: 1, icon: <AiOutlineHome />, title: "Repositories" },
  { id: 2, icon: <IoCodeSlashOutline />, title: "AI Code Review" },
  { id: 3, icon: <IoCloudOutline />, title: "Cloud Security" },
  { id: 4, icon: <GoGear />, title: "Settings" },
];

const secondaryMenu = [
  { id: 5, icon: <IoCallOutline />, title: "Support" },
  { id: 6, icon: <MdLogout />, title: "Logout" },
];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}
export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const [activeId, setActiveId] = useState(1);
  const navigate = useNavigate();

  const handleMenuClick = (itemTitle: string) => {
    if (itemTitle === "Logout") {
      navigate("/");
    }
  };

  const MenuItem = ({ menu, disableBg }: { menu: typeof primaryMenu | typeof secondaryMenu; disableBg?: boolean }) => {
    return (
      <>
        {menu.map((item) => (
          <div
            key={item.id}
            className={`${
              item.id === activeId ? "bg-primaryBlue text-white" : "hover:bg-altGray"
            } p-2 mx-2 rounded-md flex items-center gap-2 cursor-pointer font-semibold`}
            onClick={() => {
              if (!disableBg) setActiveId(item.id);
              handleMenuClick(item.title);
            }}
          >
            {item.icon}
            <p>{item.title}</p>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="flex flex-col border-r border-borderGray bg-white">
      <header className="flex justify-between items-center p-4 border-b border-borderGray md:border-none">
        <div className="flex gap-2 items-center text-xl cursor-pointer">
          <img src={logo} alt="logo" className="w-6" />
          <div>CodeAnt AI</div>
        </div>
        <div className="md:hidden" onClick={toggleSidebar}>
          <div className="scale-[1.5]">{isOpen ? <MdClose /> : <GiHamburgerMenu />}</div>
        </div>
      </header>

      <aside
  className={`flex-grow flex flex-col absolute top-0 left-0 z-50 transition-transform duration-300 md:relative md:translate-y-0 md:w-64 md:bg-white h-full bg-black bg-opacity-50 ${
    isOpen ? "translate-y-14 w-full" : "-translate-y-full"
  }`}
>
        <div className="py-4 px-4 bg-white">
          <div className="relative">
            <select className="w-full border rounded p-2 pr-8 text-ellipsis overflow-hidden appearance-none focus:outline-none">
              <option>Adil Mohamed</option>
              <option>Tenet</option>
              <option>Odessey</option>
              <option>Inception</option>
              <option>Dark Knight</option>
            </select>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <IoChevronDownOutline />
            </span>
          </div>
        </div>

        <nav className="flex flex-col md:justify-between flex-grow">
          <div className="flex flex-col gap-1 bg-white">
            <MenuItem menu={primaryMenu} />
          </div>
          <div className="flex flex-col gap-1 bg-white">
            <MenuItem menu={secondaryMenu} disableBg={true} />
          </div>
        </nav>
      </aside>
    </div>
  );
}
