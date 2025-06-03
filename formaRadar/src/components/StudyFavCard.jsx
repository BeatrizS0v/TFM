import "./StudyFavCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const StudyFavCard = ({ data }) => {
  const [side, setSide] = useState(true);

  return (
    <div className="fav">
      <div
        className={`card card_study_f flip-container ${side ? "" : "flipped"}`}
      >
        <div className="flipper">
          {/* Cara frontal */}
          <div className="front card">
            <div className="catch">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="title_study_f">
              <Link
                to={`/studies/${data.study_id}`}
                style={{ all: "unset", cursor: "pointer" }}
              >
                <h2>{data.study}</h2>
              </Link>
            </div>
            <p className="text_study_f">
              <strong>Ubicación: </strong>
              {data.location}
            </p>
            <p className="text_study_f">
              <strong>Área de conocimiento: </strong>
              {data.knowledge_area}
            </p>
            <p className="text_study_f">
              <strong>Web del centro: </strong>
              {data.center_URL}
            </p>
            <div className="columns">
              <div className="info_study_left">
                <p>
                  <strong>Tipo: </strong>
                  {data.type}
                </p>
                <p>
                  <strong>Nota de corte: </strong>
                  {data.cut_off_mark}
                </p>
                <p>
                  <strong>Número de plazas: </strong>
                  {data.number_of_places}
                </p>
                <p>
                  <strong>Valoración: </strong>
                  {data.location}
                </p>
              </div>
              <div className="info_study_right">
                <p>
                  <strong>Modalidad: </strong>
                  {data.modality}
                </p>
                <p>
                  <strong>Duración: </strong>
                  {data.duration}
                </p>
                <p>
                  <strong>Precio: </strong>
                  {data.price}
                </p>
              </div>
            </div>
            <div className="voltear" onClick={() => setSide(false)}>
              <svg
                id="svg8"
                clip-rule="evenodd"
                className="arrow"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg"
              >
                <path
                  id="path2"
                  d="m14.586 12-6.293-6.293c-.39-.39-.39-1.024 0-1.414s1.024-.39 1.414 0l7 7c.391.39.391 1.024 0 1.414l-7 7c-.39.39-1.024.39-1.414 0s-.39-1.024 0-1.414z"
                />
              </svg>
            </div>
          </div>

          {/* Cara trasera */}
          <div className="back card">
            <div className="catch">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="title_study_f">
              <Link
                to={`/studies/${data.study_id}`}
                style={{ all: "unset", cursor: "pointer" }}
              >
                <h2>{data.study}</h2>
              </Link>
            </div>
            <div className="info_study_fav">
              <h3>Centro:</h3>
              <p>{data.center}</p>
              <h3>Descripción:</h3>
              <p>{data.description}</p>
              <h3>Salidas y perspectivas:</h3>
              <p>{data.career_opportunities}</p>
              <h3>Vinculación con empresas:</h3>
              <p>{data.industry_engagement}</p>
              <h3>Requisitos de acceso:</h3>
              <p>{data.admission_requirements}</p>
            </div>
            <div className="voltear" onClick={() => setSide(true)}>
              <svg
                id="svg8"
                clip-rule="evenodd"
                className="arrow"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg"
              >
                <path
                  id="path2"
                  d="m14.586 12-6.293-6.293c-.39-.39-.39-1.024 0-1.414s1.024-.39 1.414 0l7 7c.391.39.391 1.024 0 1.414l-7 7c-.39.39-1.024.39-1.414 0s-.39-1.024 0-1.414z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyFavCard;
