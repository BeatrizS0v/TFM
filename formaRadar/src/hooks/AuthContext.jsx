import { createContext, useState, useEffect } from 'react';
import { getFavouritesById } from "../extras/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [favs, setFavs] = useState([]);

    const login = (userData) => setUser(userData);
    const logout = () => {
      setUser(null);
      setFavs([]); 
    };

  useEffect(() => {
    const fetchFavourites = async () => {
      if (user) {
        try {
          const favourites = await getFavouritesById(user.user_id);
          setFavs(favourites);
        } catch (err) {
          alert(err);
        }
      }
    };

    fetchFavourites();
  }, [user]);

    return (
        <AuthContext.Provider value={{ user, favs, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);
