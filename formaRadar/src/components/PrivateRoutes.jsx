import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../hooks/AuthContext';
import { SidebarContext } from '../hooks/SidebarContext';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const {openSidebar}=useContext(SidebarContext);

    if (!user) {
        openSidebar();
        // Se redirige a /login y se pasa la ruta actual en el estado ("from")
        return <Navigate to="/" state={{ from: location.pathname }} replace />;
    }

    return children;
};

export default PrivateRoutes;