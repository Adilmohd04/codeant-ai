import { GrStorage } from "react-icons/gr";

interface RepoCardProps {
  title: string;
  type: string;
  language: string;
  size: number;
  lastUpdated: number;
}

const RepoCard: React.FC<RepoCardProps> = ({ title, type, language, size, lastUpdated }) => {
  return (
    <div className="flex flex-col p-4 gap-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100">
      <div className="flex gap-2 items-center">
        <div className="font-medium">{title}</div>
        <div className="bg-blue-100 text-blue-500 py-0.5 px-2 rounded-full text-sm">{type}</div>
      </div>
      <div className="flex gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div>{language}</div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        </div>
        <div className="flex items-center gap-2">
          <GrStorage />
          <p>{size} KB</p>
        </div>
        <div>Updated {lastUpdated} {lastUpdated > 1 ? "days" : "day"} ago</div>
      </div>
    </div>
  );
};

export default RepoCard;
