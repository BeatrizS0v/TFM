import "./Favourite.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { deleteFavourites } from "../extras/api";
import { createFavourite } from "../extras/api";
import ProfileBar from "../components/ProfileBar.jsx";

const Favourite = ({ id_fav, dataStudy }) => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [fav, setFav] = useState(false);
  const [showProfileBar, setShowProfileBar] = useState(false);

  console.log(id_fav);

  useEffect(() => {
    setFav(!!id_fav);
  }, [id_fav]);

  const deleteFavourite = async (id_fav) => {
    try {
      await deleteFavourites(id_fav);
      setData((favs) => favs.filter((fav) => fav.fav_id !== id_fav));
      setFav(false);
    } catch (error) {
      console.error(error);
      alert("Hubo un error al eliminar de favoritos el estudio");
    }
  };

  const postFavourite = async (id_user, dataStudy) => {
    const favourite = {
      fav_id: Math.floor(Math.random() * 10) + 1,
      study_id: dataStudy.study_id,
      user_id: id_user,
      study: dataStudy.study,
      location: dataStudy.location,
    };
    await createFavourite(favourite);
    setData((favs) => [...favs, favourite]);
    setFav(true);
  };

  const handleClick = () => {
    if (user) {
      fav ? deleteFavourite(id_fav) : postFavourite(user.user_id, dataStudy);
    } else {
      setShowProfileBar(true);
      alert("Inicia sesión para poder guardar el estudio en favoritos");
    }
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClick}
        className="icon section icon_bookmark"
        id="Capa_2"
        data-name="Capa 2"
        viewBox="0 0 39.13 46.62"
      >
        <g id="Capa_1-2" data-name="Capa 1">
          <g>
            <path
              className={`relleno ${fav ? "favorito" : ""}`}
              d="m2.56,44.14c-.14-15.92.02-32.28.17-35.87.04-.84.14-2.69,1.45-4.07,1.06-1.12,2.5-1.49,3.53-1.62h23.53c.49.02,2.05.15,3.44,1.35,1.73,1.49,1.91,3.51,1.94,3.91,0,10.56-.04,25.75-.04,36.31-5.69-4.47-11.39-8.93-17.08-13.4-5.65,4.47-11.3,8.93-16.95,13.4Z"
            />
            <path
              className="borde"
              d="m5.06,44.14c-.07-8.16-.07-16.32,0-24.48.02-2.82.05-5.65.1-8.47.02-.83.03-1.66.06-2.48.03-.98-.04-1.75.63-2.62,1-1.3,2.91-1,4.32-1h20.1c.37,0,.75-.02,1.12,0,.04,0,.34.04.09,0-.33-.05.28.07.33.09.69.21,1.29.54,1.72,1.14.34.47.4.86.58,1.39.16.49.02-.3.02.02,0,.38,0,.76,0,1.14,0,3.55,0,7.1-.01,10.64-.01,8.21-.03,16.41-.03,24.62l4.27-1.77c-5.69-4.47-11.39-8.93-17.08-13.4-1.16-.91-2.36-.93-3.54,0-5.65,4.47-11.3,8.93-16.95,13.4-1.06.84-.88,2.66,0,3.54,1.05,1.05,2.47.84,3.54,0,5.65-4.47,11.3-8.93,16.95-13.4h-3.54c5.69,4.47,11.39,8.93,17.08,13.4,1.62,1.27,4.27.58,4.27-1.77,0-7.93.02-15.86.03-23.79,0-3.82.01-7.65.01-11.47s-1.89-7.2-5.68-8.43c-1.86-.61-3.96-.37-5.89-.37h-14.46C10.84.08,8.33-.22,6.13.34,2.16,1.35.37,4.73.22,8.57c-.09,2.24-.1,4.49-.13,6.74C-.02,24.92-.02,34.53.06,44.14c.03,3.22,5.03,3.22,5,0Z"
            />
          </g>
        </g>
      </svg>
      {showProfileBar && <ProfileBar />}
    </>
  );
};

export default Favourite;
