import StudyListCard from "../components/StudyListCard";
import { useFilteredStudies } from "../hooks/useFilteredStudies";
import { useMemo } from "react";
import Loading from "../components/Loading";


const VListStudies = () => {
  const { filteredStudies, loading, error } = useFilteredStudies();

    if (loading) {
    return <div className="cont">
      <Loading/>
    </div>;
  }
  if(error){
    return <div className="cont">
      {error}
    </div>;
  }
  return (
    <div
      className="grid-container"
      style={{
        marginTop: "120px",
        backgroundColor: "var(--color-fondo-2)",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
        color: "white",
      }}
    >
      
{!filteredStudies || filteredStudies.length === 0 ? (
      <p style={{display: "flex", justifyContent: "center", fontSize: "large"}}>No se han encontrado estudios</p>
    ) : (
      filteredStudies.map((study) => (
        <StudyListCard key={study.study_id} data={study} />
      ))
    )}

      </div>
  );
};

export default VListStudies;
