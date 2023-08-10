import { useEffect, useState } from "react";
import useFetch from "./useFetch.js";
import { getDepto } from "../services/stringFormatter.js";

const useTitle = (title) => {
  const { data } = useFetch(process.env.REACT_APP_API_URL +  `/config`);

  const [depto, setDepto] = useState(0)

  useEffect(() => {
    if(data){
      setDepto(data.departamento)
    }
  }, [data]);

  useEffect(() => {
    document.title = `${title} - Lempira`; 
  }, [title, depto]);
};

export default useTitle;