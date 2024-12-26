import logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import bitbucket from "../../assets/bitbucket.svg";
import azure from "../../assets/azure.svg";
import gitlab from "../../assets/gitlab.svg";
import key from "../../assets/key.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AuthTypeButton = ({
  isActive,
  title,
  onClick,
}: {
  isActive: boolean;
  title: string;
  onClick: () => void;
}) => {
  return (
    <button
      className={`w-1/2 py-3 px-2 rounded-md text-center font-medium transition-all ${
        isActive ? "bg-primaryBlue text-white" : "bg-altGray hover:shadow-md"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const AuthOptionCard = ({
  title,
  icon,
  onClick,
}: {
  title: string;
  icon: string;
  onClick: () => void;
}) => {
  return (
    <div
      className="flex items-center justify-center gap-2 py-3 px-4 border border-borderGray rounded-lg md:w-3/5 w-4/5 cursor-pointer transition hover:shadow-lg"
      onClick={onClick}
    >
      <img src={icon} alt={title} className="w-5" />
      <div className="text-sm font-semibold">{title}</div>
    </div>
  );
};

export default function SignupRight() {
  const navigate = useNavigate();
  const [authId, setAuthId] = useState(1);

  const authOptions = [
    {
      id: 1,
      title: "SAAS",
      options: [
        { id: 1, title: "Sign in with GitHub", icon: github },
        { id: 2, title: "Sign in with Bitbucket", icon: bitbucket },
        { id: 3, title: "Sign in with Azure DevOps", icon: azure },
        { id: 4, title: "Sign in with GitLab", icon: gitlab },
      ],
    },
    {
      id: 2,
      title: "Self Hosted",
      options: [
        { id: 1, title: "Self Hosted GitLab", icon: gitlab },
        { id: 2, title: "Sign in with SSO", icon: key },
      ],
    },
  ];

  const selectedAuthOptions = authOptions.find((auth) => auth.id === authId);

  return (
    <div className="relative min-h-screen bg-bgGray flex flex-col justify-center">
      <div className="bg-white mx-6 p-6 sm:p-8 rounded-lg border border-borderGray shadow-lg">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-2xl font-light mb-6">
            <img src={logo} alt="Logo" className="w-6" />
            <span>CodeAnt AI</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Welcome to CodeAnt AI
          </h2>
        </div>

        <div className="flex w-[90%] mx-auto my-6 rounded-md border border-borderGray">
          {authOptions.map(({ id, title }) => (
            <AuthTypeButton
              key={id}
              isActive={id === authId}
              title={title}
              onClick={() => setAuthId(id)}
            />
          ))}
        </div>

        <div className="w-full border-b border-borderGray mb-6"></div>

        <div className="flex flex-col items-center gap-4 min-h-[220px]">
          {selectedAuthOptions?.options.map(({ id, title, icon }) => (
            <AuthOptionCard
              key={id}
              title={title}
              icon={icon}
              onClick={() => navigate("/home")}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 text-center text-xs text-gray-500">
        By signing up, you agree to the{" "}
        <b className="font-semibold">Privacy Policy</b>.
      </div>
    </div>
  );
}
