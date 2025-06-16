import { useState, useContext } from "react";
import { createComment } from "../extras/api";
import "./VCreateComment.css";
import { AuthContext } from "../hooks/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import StarIcon from "../components/StarIcon";

const VCreateComment = () => {
  const [newText, setNewText] = useState("");
  const [newRate, setNewRate] = useState(5);
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const { data } = location.state ;
  const navigate = useNavigate();

console.log(data);

  const create = async () => {
      const newComment = {
        comment_id: Math.floor(Math.random() * 10) + 1,
        user_id: user.user_id,
        study_id: data.study_id,
        comment: newText,
        rating: newRate,
      };
      const confirmado = window.confirm("Recuerda que para dejar un comentario sobre un estudio debes haber estado matriculad@ en él, ¿seguro que quieres hacer este comentario?");
      if(confirmado){
        await createComment(newComment);
        console.log("Nuevo comentario:", newComment);
        alert("Comentario creado con éxito");
        navigate(`/studies/${data.study_id}`)
      }
  };

  return (
    <div className="cont">
      <div className="createComment">
        <h2>Deja tu comentario</h2>
        <div className="info_comment">
          <p><strong>Estudio:</strong> {data.study}</p>
          <p><strong>Centro:</strong> {data.center}</p>
        </div>
        <label>Deja un comentario:</label>
        <textarea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="enterText"
          style={{ color: "white" }}
        />
        <label>Valora tu experiencia en este estudio del 1 al 5:</label>
        <div className="input_rate">
          <input
              type="number"
              name="rating"
              value={newRate}
              min="1"
              max="5"
              onChange={(e) => setNewRate(Number(e.target.value))}
            />
            {[...Array(newRate)].map((elem, index) => (
                <StarIcon key={index} size="20px"/> 
            ))}
        </div>
        <button onClick={create}>Publicar</button>
      </div>
    </div>
  );
};

export default VCreateComment;
