import React, { useState } from "react";
import RepoCard from "./RepoCard";
import { LuRefreshCw } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

const reposList = [
  { id: 1, title: "design-system", type: "Public", language: "React", size: 7320, lastUpdated: 1 },
  { id: 2, title: "codeant-ci-app", type: "Private", language: "JavaScript", size: 5871, lastUpdated: 2 },
  { id: 3, title: "analytics-dashboard", type: "Private", language: "Python", size: 4521, lastUpdated: 5 },
  { id: 4, title: "mobile-app", type: "Public", language: "Swift", size: 3096, lastUpdated: 3 },
  { id: 5, title: "e-commerce-platform", type: "Private", language: "Java", size: 6210, lastUpdated: 6 },
  { id: 6, title: "blog-website", type: "Public", language: "HTML/CSS", size: 1876, lastUpdated: 4 },
  { id: 7, title: "social-network", type: "Private", language: "PHP", size: 5432, lastUpdated: 7 },
];

const MainContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRepos = reposList.filter((repo) =>
    repo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="h-screen flex flex-col bg-gray-100">
      <div
        className="flex-grow bg-white p-4 rounded-lg shadow-md overflow-y-auto"
        style={{
          scrollbarWidth: "none", 
          msOverflowStyle: "none", 
        }}
      >
      

        <div className="flex flex-col gap-2 md:flex-row md:justify-between mb-4">
          <div className="flex flex-col gap-0.5">
            <div className="text-2xl font-medium">Repositories</div>
            <div className="text-sm text-altText">
              {filteredRepos.length} total repositories
            </div>
          </div>

          <div className="flex gap-4">
            <button
              className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200 rounded transition group"
              aria-label="Refresh All Repositories"
            >
              <LuRefreshCw className="group-hover:rotate-180 transition-transform" />
              <span>Refresh All</span>
            </button>
            <button
              className="flex items-center gap-2 p-2 cursor-pointer bg-primaryBlue text-white hover:bg-gray-700 rounded transition"
              aria-label="Add New Repository"
            >
              <FiPlus />
              <span>Add Repository</span>
            </button>
          </div>
        </div>

        <div className="flex items-center border border-borderGray mt-2 p-0.5 rounded-md md:w-1/3 bg-white shadow-sm">
          <div className="scale-[1.5] px-2">
            <IoIosSearch />
          </div>
          <input
            type="text"
            placeholder="Search repositories"
            className="w-full px-2 py-1 focus:border-0 focus:outline-none bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="mt-4">
          {filteredRepos.length > 0 ? (
            filteredRepos.map((repo) => <RepoCard key={repo.id} {...repo} />)
          ) : (
            <div className="text-center text-gray-500 mt-8">
              No repositories found.
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
