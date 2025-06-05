import StudyListCard from "../components/StudyListCard";
import { useFilteredStudies } from "../hooks/useFilteredStudies";
import { useComments } from "../hooks/useComments";
import { useMemo } from "react";
import Loading from "../components/Loading";


const VListStudies = () => {
  const { filteredStudies, loading, error } = useFilteredStudies();
  const studyIds = useMemo(() => filteredStudies.map(s => s.study_id), [filteredStudies]);
  const commentsData = useComments(studyIds);

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
            {loading && <Loading/>}
            {error && <p>Error: {error}</p>}
           {" "}
      {filteredStudies.map((study) => (
        <StudyListCard
          key={study.study_id}
          data={study}
          rate={commentsData[study.study_id]?.rate}
          numComments={commentsData[study.study_id]?.numComments}
        />
      ))}
         {" "}
    </div>
  );
};

export default VListStudies;
