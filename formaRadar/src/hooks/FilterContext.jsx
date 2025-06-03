import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [searchTerm, setSearch] = useState("");
  const [selectedAreas, setAreas] = useState([]);
  const [selectedCenter, setCenter] = useState("");
  const [selectedModality, setModality] = useState("");
  const [selectedType, setType] = useState([]);
  const [maxPrice, setMaxPrice] = useState(50);
  const [selectedLocations, setLocations] = useState([]);

  //actualizar filtros del componente filters
  const updateAreas = (value) => setAreas(value);
  const updateCenter = (value) => setCenter(value);
  const updateModality = (value) => setModality(value);
  const updateType = (value) => setType(value);
  const updateMaxPrice = (value) => setMaxPrice(value);
  const updateLocations = (value) => setLocations(value);

  //actualizar filtros de filterbar
  const updateTermSearch = (name) => setSearch(name);

  return (
      <FilterContext.Provider value={{ searchTerm, selectedAreas, selectedCenter, selectedModality, selectedType, maxPrice, selectedLocations, updateAreas, updateCenter, updateType, updateLocations, updateMaxPrice, updateModality, updateTermSearch }}>
        {children}
      </FilterContext.Provider>
  );
};

