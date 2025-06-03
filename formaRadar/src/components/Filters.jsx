import { useState, useEffect, useContext } from "react";
import "./Filters.css";
import MultiSelect from "./Multiselect";
import Map from "./Map";
import { optionsKnowledge_area } from "../extras/filtros";
import { optionsDuration } from "../extras/filtros";
import { optionsLocations } from "../extras/filtros";
import { FilterContext } from "../hooks/FilterContext.jsx";

const FiltersComponent = () => {
  const {
    selectedAreas,
    selectedCenter,
    selectedModality,
    selectedYears,
    maxPrice,
    selectedLocations,
    updateAreas,
    updateCenter,
    updateModality,
    updateDuration,
    updateMaxPrice,
    updateLocations,
    updateTermSearch
  } = useContext(FilterContext);

  return (
    <div className="cont_filters">
      <div className="column-1">
        <MultiSelect
          options={optionsKnowledge_area}
          value={selectedAreas}
          onChange={updateAreas}
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
          options={optionsDuration}
          value={selectedYears}
          onChange={updateDuration}
        />
        <div className="select_price">
          <label>Precio máximo (und. crédito): {maxPrice}€</label>
          <input
            type="range"
            min="0"
            max="50"
            value={maxPrice}
            onChange={(e) => updateMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="column-2">
        <div className="map_filter">
          <Map />
        </div>

        <MultiSelect
          options={optionsLocations}
          value={selectedLocations}
          onChange={updateLocations}
        />

        <p
          onClick={() => {
            updateAreas([]);
            updateCenter("");
            updateModality("");
            updateDuration([]);
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
