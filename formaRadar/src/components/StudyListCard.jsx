import React from "react";
import "./StudyListCard.css";
import { Link } from "react-router-dom";
import { useContext} from 'react';
import { AuthContext } from '../hooks/AuthContext';
import Favourite from "../components/Favourite.jsx";
import { useComments } from "../hooks/useComments.js";
import StarIcon from "./StarIcon.jsx";

const StudyListCard = React.memo(({ data }) => {
    const {favs} = useContext(AuthContext);
    const {rate, numComments}=useComments(data.study_id);

    const favourite=favs.find((fav)=> fav.study_id===data.study_id)

  if(rate && numComments){
  return (
    <div className="card card_list grid-item">
      <div>
        <div className="title_card">
          <img
            className="logo_uni_card"
            src={data.center_logo}
            alt="Foto de perfil"
          ></img>
          <Link
            to={`/studies/${data.study_id}`}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <h4 className="title_study_card">{data.study}</h4>
          </Link>
        </div>
        <div className="data_card">
          <div className="info_card">
            <p className="info_card_p">{data.location}</p>
            <p className="info_card_p">
              {data.type_of_institution.charAt(0).toUpperCase() +
                data.type_of_institution.slice(1).toLowerCase()}
            </p>
            <p className="info_card_p">
              {data.modality.charAt(0).toUpperCase() +
                data.modality.slice(1).toLowerCase()}
            </p>
          </div>
          <div className="iconos_card">
            <div className="section show_comments">
              <svg
                viewBox="0 0 32 32"
                className="icon icon_comments"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="bubble_comment" data-name="bubble comment">
                  <path d="m25.17 5h-18.34a2.76 2.76 0 0 0 -2.83 2.67v11.66a2.76 2.76 0 0 0 2.83 2.67h1.75v4a1 1 0 0 0 .56.9 1 1 0 0 0 .44.1 1 1 0 0 0 .62-.21l6.14-4.79h8.83a2.76 2.76 0 0 0 2.83-2.67v-11.66a2.76 2.76 0 0 0 -2.83-2.67zm-15.17 10a2 2 0 1 1 2-2 2 2 0 0 1 -2 2zm6 0a2 2 0 1 1 2-2 2 2 0 0 1 -2 2zm6 0a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z" />
                </g>
              </svg>
              <div className="num">{numComments}</div>
            </div>
            <div className="section show_rate">
              <StarIcon size="35px"/>
              <p className="rate">{rate}</p>
            </div>
            <div className="bookmark_list" style={{marginTop: "5px"}}>
            <Favourite id_fav={favourite?.fav_id} dataStudy={data}/>
          </div>
          </div>
        </div>
      </div>
      <div className="etiqueta">{data.type}</div>
    </div>
  
  )};
});

export default StudyListCard;
