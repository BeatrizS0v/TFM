import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Filterbar from "./components/Filterbar";
import ProfileBar from "./components/ProfileBar.jsx";
import VListStudies from "./views/VListStudies";
import VStudy from "./views/VStudy";
import VListFavourites from "./views/VListFavourites";
import VLanding from "./views/VLanding";
import { AuthProvider } from "./hooks/AuthContext";
import { FilterProvider } from "./hooks/FilterContext.jsx";
import { useContext } from "react";
import { ColorContext } from "./hooks/ColorContext.jsx";
import { ColorProvider } from "./hooks/ColorContext.jsx";
import { useEffect } from "react";
import VSignUp from "./views/VSignUp.jsx";
import VEditUser from "./views/VEditUser.jsx";
import { SidebarProvider } from "./hooks/SidebarContext.jsx";
import PrivateRoutes from "./components/PrivateRoutes.jsx";
import VCreateComment from "./views/VCreateComment.jsx";

function App() {
  return (
    <ColorProvider>
    <SidebarProvider>
      <AppContent />
    </SidebarProvider>
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
          <ProfileBar/>
          <Routes>
            <Route path="/" element={<VLanding />} />
            <Route path="/studies" element={<VListStudies />} />
            <Route path="/studies/:id" element={<VStudy />} />
            <Route path="/studies/favourites/:id" element={
              <PrivateRoutes>
                <VListFavourites />
              </PrivateRoutes>
            } />
            <Route path="/signup" element={<VSignUp />} />
            <Route path="/edituser" element={
              <PrivateRoutes>
                  <VEditUser />
              </PrivateRoutes>
            }/>
            <Route path="/studies/:id/createcomment" element={
              <PrivateRoutes>
                <VCreateComment/>
              </PrivateRoutes>
            }/>
          </Routes>
        </FilterProvider>
      </AuthProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
