import SignupLeft from "./Components/Signup/SignupLeft";
import SignupRight from "./Components/Signup/SignupRight";

export default function Signup() {
  return (
    <>
    <main className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <SignupLeft />
      <SignupRight />
    </main>
    </>
  );
}