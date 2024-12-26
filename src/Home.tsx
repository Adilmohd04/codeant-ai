import { useState } from "react";
import MainContent from "./Components/Home/MainContent";
import Sidebar from "./Components/Home/Sidebar";

const Home: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen md:flex-row">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex-grow">
        <MainContent />
      </div>
    </div>
  );
};

export default Home;
