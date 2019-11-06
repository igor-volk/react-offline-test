import { useEffect, useState } from "react";
import axios from "axios";

import { IServiceResult } from "../interfaces";

function dataService(dataSource: string) : IServiceResult {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({ generationmix: [], to: new Date(), from: new Date() });
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(dataSource);

        if (response.data) {
          setResult(response.data.data);
        }
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }

    fetchData();
  }, [dataSource]);

  return {
    error,
    loading,
    result
  };
}

export default dataService;
