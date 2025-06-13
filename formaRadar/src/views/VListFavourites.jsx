import "./VListFavourites.css";
import StudyFavCard from "../components/StudyFavCard";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { getFavouritesById } from "../extras/api";
import { getStudies } from "../extras/api";
import Loading from "../components/Loading";

const VListFavourites = () => {
  const [loading, setLoading] = useState(true);
  const {favs}=useContext(AuthContext);
  const [error, setError] = useState("");
  const [filteredStudies, setFilteredStudies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const studies= await getStudies();
        const favStudyIds = new Set(favs.map((fav) => fav.study_id));
        const filtered = studies.filter((study) =>
          favStudyIds.has(study.study_id)
        );
        setFilteredStudies(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, favs]);

  if (loading) {
    return <div className="cont"><Loading/> </div>;
  }

  return (
    <div className="conte">
      {filteredStudies.map((study) => (
        <StudyFavCard key={study.study_id} data={study} />
      ))}
    </div>
  );
};

export default VListFavourites;
