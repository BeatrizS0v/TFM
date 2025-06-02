import StudyListCard from "../components/StudyListCard";
import { useFilteredStudies } from "../hooks/useFilteredStudies";

const VListStudies = () => {
    const { filteredStudies, loading, error } = useFilteredStudies();

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
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
           {" "}
      {filteredStudies.map((study) => (
        <StudyListCard key={study.study_id} data={study}/>
      ))}
         {" "}
    </div>

  );
};

export default VListStudies;
