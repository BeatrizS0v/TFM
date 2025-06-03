import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Filterbar from "./components/Filterbar";
import VListStudies from "./views/VListStudies";
import VStudy from "./views/VStudy";
import VListFavourites from "./views/VListFavourites";
import VLanding from "./views/VLanding";
import { AuthProvider } from "./hooks/AuthContext";
import { FilterProvider } from "./hooks/FilterContext.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FilterProvider>
          <Filterbar />
          <Routes>
            <Route path="/" element={<VLanding />} />
            <Route path="/studies" element={<VListStudies />} />
            <Route path="/studies/:id" element={<VStudy />} />
              <Route
                path="/studies/favourites/:id"
                element={<VListFavourites />}
              />
          </Routes>
        </FilterProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
