import { useState, useEffect, useContext } from "react";
import "./Filters.css";
import MultiSelect from "./Multiselect";
import Map from "./Map";
import { optionsKnowledge_area } from "../extras/filtros";
import { optionsType } from "../extras/filtros";
import { optionsLocations } from "../extras/filtros";
import { FilterContext } from "../hooks/FilterContext.jsx";

const FiltersComponent = () => {

  const {
    selectedAreas,
    selectedCenter,
    selectedModality,
    selectedType,
    maxPrice,
    selectedLocations,
    updateAreas,
    updateCenter,
    updateModality,
    updateType,
    updateMaxPrice,
    updateLocations,
    updateTermSearch
  } = useContext(FilterContext);

  const [tempPrice, setTempPrice] = useState(maxPrice);

  const handlePriceChange = (e) => {
    setTempPrice(e.target.value);

    clearTimeout(window.priceTimeout);
    window.priceTimeout = setTimeout(() => {
      updateMaxPrice(e.target.value);
    }, 300);
  };

  return (
    <div className="cont_filters">
      <div className="column-1">
        <MultiSelect
          options={optionsKnowledge_area}
          value={selectedAreas}
          onChange={updateAreas}
          info="Todas las áreas de conocimiento"
        />
        <select onChange={(e) => updateCenter(e.target.value)} value={selectedCenter}>
          <option value="">Todos los tipos de centros</option>
          <option value="público">Público</option>
          <option value="privado">Privado</option>
        </select>
        <select onChange={(e) => updateModality(e.target.value)} value={selectedModality}>
          <option value="">Todas las modalidades</option>
          <option value="presencial">Presencial</option>
          <option value="aDistancia">A distancia</option>
        </select>
        <MultiSelect
          options={optionsType}
          value={selectedType}
          onChange={updateType}
          info="Todos los tipos de estudios"
        />
        <div className="select_price">
        <label>Precio máximo (und. crédito): {tempPrice}€</label>
        <input
          type="range"
          min="0"
          max="50"
          value={tempPrice}
          onChange={handlePriceChange}
        />
      </div>
      </div>
      <div className="column-2">
        <div className="map_filter">
          <Map/>
        </div>

        <MultiSelect
          options={optionsLocations}
          value={selectedLocations}
          onChange={updateLocations}
          info="Todo el país"
        />

        <p
          onClick={() => {
            updateAreas([]);
            updateCenter("");
            updateModality("");
            updateType([]);
            updateMaxPrice(50);
            updateLocations([]);
            updateTermSearch("");
          }}
          className="limpiar_filtros"
        >
          Limpiar filtros
        </p>
      </div>
    </div>
  );
};

export default FiltersComponent;
