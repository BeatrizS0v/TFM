import { useState, useEffect } from "react";
import { getComments } from "../extras/api";

export const useComments = (id) => {
  const [rate, setRate] = useState();
  const [numComments, setNumComments]=useState();
  const [dataComments, setDataComments]=useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
        try {
          const comments = await getComments(id);
          const numCom = comments.length;
          const total = comments.reduce((acc, val) => acc + val.rating, 0);
          const rateCom = comments.length > 0 ? Number((total / comments.length).toFixed(2)) : 0;
          setDataComments(comments);
          setNumComments(numCom);
          setRate(rateCom);
        } catch (err) {
          setError("Error al cargar comentarios");
        } finally{
          setLoading(false);
        }
      }
    fetchAll();
  }, [id]);

  return {rate, numComments, dataComments, loadingComments:loading};
};
