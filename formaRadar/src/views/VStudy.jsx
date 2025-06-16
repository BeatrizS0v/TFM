import "./VStudy.css";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState} from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { getStudiesById } from "../extras/api";
import CommentCarousel from "../components/CommentCarousel.jsx";
import Favourite from "../components/Favourite.jsx";
import Loading from "../components/Loading.jsx";
import { useComments } from "../hooks/useComments.js";
import StarIcon from "../components/StarIcon.jsx";
import { SidebarContext } from "../hooks/SidebarContext.jsx";

const VStudy = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const navigate=useNavigate();
  const { id } = useParams();
  const {user, favs} = useContext(AuthContext);
  const {openSidebar}=useContext(SidebarContext);
  const {rate, dataComments, loadingComments}=useComments(id);

  const favourite = Array.isArray(favs) ? favs.find((fav) => fav.study_id === data.study_id) : [];

  useEffect(() => {
    const fetchStudy = async () => {
      setLoading(true);
      try {
        const dataStudy= await getStudiesById(id);
        setData(dataStudy);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStudy();
    
  }, [id]);

  const addComment=()=>{
    if(user){
      navigate(`/studies/${data.study_id}/createcomment`, {state: { data: data}});
    }
    else {
      openSidebar();
      alert("Inicia sesión para añadir un comentario");
    }
  }

  if (loading||loadingComments) {
    return <div className="cont">
      <Loading/>
    </div>;
  }
  return (
    <div className="cont">
      <div className="card_v_study container" style={{ margin: "0px 0px" }}>
        <div className="title_study_b row">
          <h2 className="col-8">{data.study}</h2>
          <div className="col-3" style={{marginTop: "5px"}}>
            <Favourite id_fav={favourite?.fav_id} dataStudy={data}/>
          </div>
        </div>
        <div className="row">
          <div className="info_study col-12 col-sm-8">
            <h3 className="title_study">Universidad:</h3>
            <p className="text_study">{data.center}</p>
            <h3 className="title_study">Descripción:</h3>
            <p className="text_study">{data.description}</p>
            <h3 className="title_study">Salidas y perspectivas:</h3>
            <p className="text_study">{data.career_opportunities}</p>
            <h3 className="title_study">Vinculación con empresas:</h3>
            <p className="text_study">{data.industry_engagement}</p>
            <h3 className="title_study">Requisitos de acceso:</h3>
            <p className="text_study">{data.admission_requirements}</p>
          </div>
          <div
            className="info_study col-12 col-sm-4"
            style={{ margin: "20px 0px" }}
          >
            <p className="text_study">
              <strong className="title_study">Ubicación: </strong>
              {data.location}
            </p>
            <p className="text_study">
              <strong className="title_study">Área de conocimiento: </strong>
              {data.knowledge_area}
            </p>
            <p className="text_study">
              <strong className="title_study">Tipo: </strong>
              {data.type_of_institution}
            </p>
            <p className="text_study">
              <strong className="title_study">Modalidad: </strong>
              {data.modality}
            </p>
            <p className="text_study">
              <strong className="title_study">Nota de corte: </strong>
              {data.cut_off_mark}
            </p>
            <p className="text_study">
              <strong className="title_study">Número de plazas: </strong>
              {data.number_of_places}
            </p>
            <p className="text_study">
              <strong className="title_study">Duración: </strong>
              {data.duration} años
            </p>
            <p className="text_study">
              <strong className="title_study">Valoración: </strong>
              {rate}   <StarIcon size="20px"/>
            </p>
            <p className="text_study">
              <strong className="title_study">Precio: </strong>
              {data.price}
            </p>
            <p className="text_study">
              <strong className="title_study">Web del centro: </strong> <br />{" "}
              {data.center_URL}
            </p>
          </div>
        </div>
        <div style={{width: "60%", display: "flex", justifyContent: "space-between"}}>
          <h3 className="title_study">Comentarios de antiguos alumnos:</h3>
          <p className="link" onClick={addComment} style={{width: "200px", paddingTop: "10px", textAlign: "right"}}>Añadir comentario </p>
        </div>
        <div style={{width: "60%"}}>
          <CommentCarousel comments={dataComments} carousel_id={data.study_id}/>
        </div>
      </div>
    </div>
  );
};

export default VStudy;
