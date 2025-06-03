import { useState, useEffect, useContext } from "react";
import { getStudies } from "../extras/api";
import { FilterContext } from "./FilterContext";

export const useFilteredStudies = () => {
  const [studies, setStudies] = useState([]);
  const [filteredStudies, setFilteredStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numFilters, setNumFilters]=useState(0);
  const [numResults, setNumResults]=useState(0);

  const {
    searchTerm,
    selectedAreas,
    selectedCenter,
    selectedModality,
    selectedLocations,
    maxPrice,
    selectedType
  } = useContext(FilterContext);


//se accede a la info de todos los estudios
  useEffect(() => {
    const fetchStudies = async () => {
        setLoading(true);
      try {
        const dataStudies= await getStudies();
        setStudies(dataStudies);
        setFilteredStudies(dataStudies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudies();
  }, [searchTerm, selectedAreas, selectedCenter, selectedModality, selectedLocations, maxPrice, selectedType]);
  //se cuenta el número de filtros
  useEffect(()=>{
    let num=0;
    if(searchTerm!=="")
        num++;
    num=num+selectedAreas.length;
    if(selectedCenter!=="")
        num++;
    if(selectedModality!=="")
        num++;
    num=num+selectedType.length;
    if(maxPrice!==50)
        num++;
    num+=selectedLocations.length;

    setNumFilters(num);
  }, [searchTerm, selectedAreas, selectedCenter, selectedModality, selectedType, maxPrice, selectedLocations]);
  
  //se establecen los filtros
  useEffect(() => {
    const results = studies.filter(study =>{
      const name = study.study.toLowerCase().includes(searchTerm.toLowerCase());
      const knowledgeArea = selectedAreas.length>0
        ? selectedAreas.includes(study.knowledge_area)
        : true;
      const centerType = selectedCenter ? study.type_of_institution.toLowerCase() === selectedCenter: true;
      const modality = selectedModality ? study.modality.toLowerCase() === selectedModality: true;
      const type = selectedType.length>0 
        ? selectedType.includes(study.type)
        : true;
      const price = study.price <= maxPrice;
      const location = selectedLocations.length>0 
        ? selectedLocations.includes(study.location)
        : true;
      return name && knowledgeArea && centerType && modality && type && price && location;
  });
    setFilteredStudies(results);
    setNumResults(results.length);
  }, [searchTerm, selectedAreas, selectedCenter, selectedModality, selectedType, maxPrice, selectedLocations, studies]);

  return { filteredStudies, loading, error, numFilters, numResults };
};