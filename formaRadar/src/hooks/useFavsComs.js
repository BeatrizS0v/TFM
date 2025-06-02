import { useState, useEffect, useContext } from "react";
import { getComments } from "../extras/api";

export const useFavsComs = (id) => {
  const [comments, setComments] = useState([]);
  const [numComments, setNumComments] = useState(0);
  const [rate, setRate] = useState();

  //se accede a la info de los comentarios según study_id
  useEffect(() => {
    const fetchComments = async () => {
      // setLoading(true);
      try {
        const dataComments = await getComments(id);
        setComments(dataComments);
        setNumComments(dataComments.length);
        const total = dataComments.reduce((acc, valor) => {
          return acc + valor.rating;
        }, 0);
        const media = dataComments.length > 0 ? total / dataComments.length : 0;
        setRate(Number(media.toFixed(2)));
      } catch (err) {
        alert(err.message);
      } finally {
        // setLoading(false);
      }
    };
    fetchComments();
  }, []);

  return { comments, numComments, rate };
};
