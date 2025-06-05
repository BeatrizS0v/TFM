import React from "react";
import "./StudyListCard.css";
import { Link } from "react-router-dom";
import { useContext} from 'react';
import { AuthContext } from '../hooks/AuthContext';
import Favourite from "../components/Favourite.jsx";

const StudyListCard = React.memo(({ data, rate, numComments }) => {
    const {favs} = useContext(AuthContext);

    const favourite=favs.find((fav)=> fav.study_id===data.study_id)
    
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
              <svg
                viewBox="0 -11 512.00047 512"
                className="icon icon_star"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m510.644531 185.011719c-3.878906-11.933594-15.425781-20.132813-31.683593-22.496094l-132.511719-19.257813-59.265625-120.074218c-7.269532-14.730469-18.636719-23.183594-31.183594-23.183594s-23.914062 8.453125-31.183594 23.1875l-59.257812 120.070312-132.515625 19.257813c-16.261719 2.363281-27.8125 10.5625-31.6875 22.496094-3.875 11.933593.648437 25.355469 12.414062 36.820312l95.890625 93.464844-22.640625 131.980469c-2.894531 16.878906 2.039063 26.992187 6.6875 32.507812 5.453125 6.46875 13.40625 10.03125 22.394531 10.03125 6.761719 0 13.953126-1.980468 21.378907-5.882812l118.519531-62.308594 118.527344 62.3125c7.421875 3.902344 14.613281 5.878906 21.375 5.878906h.003906c8.984375 0 16.941406-3.5625 22.394531-10.03125 4.644531-5.511718 9.582031-15.628906 6.683594-32.507812l-22.636719-131.980469 95.886719-93.464844c11.761719-11.464843 16.285156-24.886719 12.410156-36.820312zm0 0" />
              </svg>
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
  );
});

export default StudyListCard;
