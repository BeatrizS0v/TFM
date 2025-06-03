import { useState, useEffect } from "react";
import { getComments } from "../extras/api";

export const useComments = (ids) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchAll = async () => {
      const results = {};
      for (const id of ids) {
        try {
          const comments = await getComments(id);
          const numComments = comments.length;
          const total = comments.reduce((acc, val) => acc + val.rating, 0);
          const rate = comments.length > 0 ? Number((total / comments.length).toFixed(2)) : 0;
          results[id] = { rate, numComments };
        } catch (err) {
          results[id] = { rate: 0, numComments: 0 };
        }
      }
      setData(results);
    };

    if (ids.length > 0) fetchAll();
  }, [ids]);

  return data;
};
