import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
