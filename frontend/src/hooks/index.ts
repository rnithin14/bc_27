import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://18.119.118.9:8090/v1";

export const useAxios = (axiosParams: any, variable: any) => {
  const [response, setResponse] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setloading] = useState(true);

  const fetchData = async (params: any) => {
    try {
      console.log(params);

      const result = await axios.request(params);
      setResponse(result.data);
    } catch (errors) {
      setError("error");
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, variable);

  return { response, error, loading };
};
