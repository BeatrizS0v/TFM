import react from "../assets/react.svg";
import React from "react";
import "./StudyListCard.css";
import { Link } from "react-router-dom";

const StudyListCard = React.memo(({ data, rate, numComments }) => {
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
            <svg xmlns="http://www.w3.org/2000/svg" className="icon section icon_bookmark" id="Capa_2" data-name="Capa 2" viewBox="0 0 39.13 46.62">
  <g id="Capa_1-2" data-name="Capa 1">
    <g>
      <path className="relleno" d="m2.56,44.14c-.14-15.92.02-32.28.17-35.87.04-.84.14-2.69,1.45-4.07,1.06-1.12,2.5-1.49,3.53-1.62h23.53c.49.02,2.05.15,3.44,1.35,1.73,1.49,1.91,3.51,1.94,3.91,0,10.56-.04,25.75-.04,36.31-5.69-4.47-11.39-8.93-17.08-13.4-5.65,4.47-11.3,8.93-16.95,13.4Z"/>
      <path className="borde" d="m5.06,44.14c-.07-8.16-.07-16.32,0-24.48.02-2.82.05-5.65.1-8.47.02-.83.03-1.66.06-2.48.03-.98-.04-1.75.63-2.62,1-1.3,2.91-1,4.32-1h20.1c.37,0,.75-.02,1.12,0,.04,0,.34.04.09,0-.33-.05.28.07.33.09.69.21,1.29.54,1.72,1.14.34.47.4.86.58,1.39.16.49.02-.3.02.02,0,.38,0,.76,0,1.14,0,3.55,0,7.1-.01,10.64-.01,8.21-.03,16.41-.03,24.62l4.27-1.77c-5.69-4.47-11.39-8.93-17.08-13.4-1.16-.91-2.36-.93-3.54,0-5.65,4.47-11.3,8.93-16.95,13.4-1.06.84-.88,2.66,0,3.54,1.05,1.05,2.47.84,3.54,0,5.65-4.47,11.3-8.93,16.95-13.4h-3.54c5.69,4.47,11.39,8.93,17.08,13.4,1.62,1.27,4.27.58,4.27-1.77,0-7.93.02-15.86.03-23.79,0-3.82.01-7.65.01-11.47s-1.89-7.2-5.68-8.43c-1.86-.61-3.96-.37-5.89-.37h-14.46C10.84.08,8.33-.22,6.13.34,2.16,1.35.37,4.73.22,8.57c-.09,2.24-.1,4.49-.13,6.74C-.02,24.92-.02,34.53.06,44.14c.03,3.22,5.03,3.22,5,0Z"/>
    </g>
  </g>
</svg>
          </div>
        </div>
      </div>
      <div className="etiqueta">{data.type}</div>
    </div>
  );
});

export default StudyListCard;
