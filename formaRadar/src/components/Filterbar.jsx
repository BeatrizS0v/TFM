import user from "../assets/user.png";
import logo from "../assets/logo.png";
import "./Filterbar.css";
import Map from "./Map";
import { useState, useContext } from "react";
import ProfileBar from "./ProfileBar";
import Filters from "./Filters";
import { FilterContext } from "../hooks/FilterContext.jsx";
import { useFilteredStudies } from "../hooks/useFilteredStudies.js";
import { Link } from "react-router-dom";

const Filterbar = () => {
  const [showMap, setShowMap] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const { searchTerm, updateTermSearch } = useContext(FilterContext);
  const { numFilters, numResults } =
    useFilteredStudies();

  //mostrar el mapa
  const handleMap = () => {
    if (showMap) {
      return (
        <div className="window_map card">
          <Map />
        </div>
      );
    }
  };

  //mostrar el componente de filtros
  const handleFilters = () => {
    if (showFilters) {
      return <Filters/>;
    }
  };

  return (
    <div className="filterbar container-fluid">
      <div className="row bar">
        <Link className="col-12 col-lg-2" to={`/`}>
          <img className="logo col-12 col-lg-2" src={logo} alt=""></img>
        </Link>
        <div
          className="filters access col-12 col-sm-2 col-lg-1"
          onClick={() => setShowFilters(!showFilters)}
        >
          <svg
            id="icons"
            viewBox="0 0 64 64"
            className="icon icon_filter"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m53.39 8h-42.78a5.61 5.61 0 0 0 -4.15 9.38l18.54 20.39v19.23a2 2 0 0 0 1.13 1.8 1.94 1.94 0 0 0 .87.2 2 2 0 0 0 1.25-.44l3.75-3 6.25-5a2 2 0 0 0 .75-1.56v-11.23l18.54-20.39a5.61 5.61 0 0 0 -4.15-9.38z" />
          </svg>
          <div className="num">{numFilters}</div>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => updateTermSearch(e.target.value)}
          placeholder="Buscar estudios..."
          className="search enterText col-12 col-sm-6 col-lg-5"
          style={{ color: "white" }}
        />
        <Link to={'/studies'} className="col-12 col-sm-4 col-lg-1">
          <button>Buscar</button>
        </Link>
        <div
          className="locations access col-12 col-sm-2 col-lg-1"
          onClick={() => setShowMap(!showMap)}
        >
          <svg
            enableBackground="new 0 0 283.465 283.465"
            className="icon icon_map col-12 col-sm-6 col-lg-1"
            viewBox="0 0 283.465 283.465"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_1_35_" clipRule="evenodd" fillRule="evenodd">
              <path d="m7.057 211.38s13.241 0 17.026 12.926c3.783 12.926 4.73 21.755 7.566 26.168 2.837 4.414 10.72 7.251 10.72 7.251s3.468-9.458 9.773-8.512 12.295 3.784 16.394 1.261c4.099-2.522 10.719-1.892 16.395 0 5.675 1.893 17.34-.315 19.862 2.838 2.522 3.152 14.503 7.882 19.863 8.197 0 0 2.838-11.35 11.666-13.872 8.827-2.522 20.335-5.361 20.335-5.361l6.306-.945s-.63-14.187 8.828-19.233c9.459-5.044 21.752-3.782 18.601-9.458-3.152-5.675-6.936-6.936-7.251-13.242s0-13.872 10.404-22.384c10.405-8.512 17.025-13.556 17.025-13.556l7.251-1.577s1.576-11.35 10.404-11.035c8.829.315 11.982.315 16.71-.631 4.729-.946 12.141-4.887 20.652-8.04 8.514-3.152 10.405-9.142 10.405-12.768s2.838-13.084-4.571-11.035-15.606 3.153-20.02.315-12.295-7.566-11.98-8.512c.315-.947-13.557-16.867-21.28-12.926-7.724 3.941-21.124-2.994-28.217-10.56-7.094-7.568-7.092-13.875-10.403-14.821-3.31-.945-5.675 2.363-11.981-2.207-6.306-4.572-8.04-6.778-8.04-6.778s-8.04-1.892-14.03-4.256-16.076 1.261-30.737-7.724c-14.66-8.986-7.409-5.991-16.71-10.248-9.3-4.255-10.877-.787-19.389-5.201-8.512-4.413-15.449-11.507-16.71-12.611s-10.247-1.89-12.454 2.207c-2.206 4.098-2.522 5.359-7.251 4.413s-5.833-3.783-11.034-.946c-5.203 2.838-8.828 2.996-8.198 6.937s4.099 15.449 3.783 17.498c-1.893 12.286-2.216 18.889 1.443 20.985 2.891 1.657 8.116-1.063 18.105 4.868 5.042 2.995 9.142 6.304 9.458 3.784.316-2.523 3.786-5.046 9.46 1.102s4.571 14.03 5.202 14.818c.631.787-10.483 1.574-15.763 7.959-5.281 6.384-3.154 13.242-3.154 13.242s-4.017 10.166-7.801 15.525c-3.783 5.36-8.512 9.301-9.615 8.355s-12.927-7.094-11.35-3.154c1.576 3.941 3.625 14.818 4.413 16.395s-7.723 10.245-6.303 18.442c1.419 8.196 3.941 8.671 4.255 11.508.316 2.837-1.892.629-8.04 3.783-6.148 3.15-10.954 10.952-10.023 20.816z" />
              <path d="m212.612 189.956c-6.633 13.009 8.162 5.101 13.265 15.05 5.102 9.949 6.888 13.265 13.521 14.031s21.43-12.5 22.194-19.898c.765-7.398-8.674-1.785-14.541-4.847-5.867-3.061 7.909-14.031-7.398-11.479-15.307 2.551-27.041 7.143-27.041 7.143z" />
            </g>
          </svg>
          <div className="num">{numResults}</div>
          {handleMap()}
        </div>
        <img
          className="icon icon_profile col-12 col-sm-6 col-lg-1"
          src={user}
          alt="Foto de perfil"
          onClick={() => setShowProfile(!showProfile)}
        />
      </div>
      {showProfile && <ProfileBar closeProfile={() => setShowProfile(false)} />}
      {handleFilters()}
    </div>
  );
};

export default Filterbar;
