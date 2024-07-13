import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import Jaunt from "./pages/Jaunt";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      {/* <AchievementProvider> */}
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/jaunt" Component={Jaunt} />
        <Route path="/about" element={<p>about me</p>} />
      </Routes>
      {/* <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
                    <Achievement />
                </div>
            </AchievementProvider> */}
    </BrowserRouter>
  );
}

export default App;
