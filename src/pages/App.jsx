import "../styles/App.css";
import "../styles/index.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import TokenInfo from "./TokenInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:symbol" element={<TokenInfo />} />
      </Routes>
    </>
  );
}

export default App;
