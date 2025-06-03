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
import { useContext } from "react";
import { ColorContext } from "./hooks/ColorContext.jsx";
import { ColorProvider } from "./hooks/ColorContext.jsx";
import { useEffect } from "react";


function App() {
  return (
    <ColorProvider>
      <AppContent />
    </ColorProvider>
  );
}

function AppContent() {
  const {lightMode}=useContext(ColorContext);
  
  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", lightMode);
  }, [lightMode]);


  return (
    <div className="App">
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
    </div>
  );
}

export default App;
