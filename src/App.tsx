import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import Jaunt from "./pages/Jaunt";
import ScrollToTop from "./components/ScrollToTop";
import { LivingRoom } from "./pages/LivingRoom";

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" index Component={Main} />
        <Route path="/jaunt" Component={Jaunt} />
        <Route path="/about" element={<p>about me</p>} />
        <Route path="/llliving-room" Component={LivingRoom} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
