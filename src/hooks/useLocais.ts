import { useState } from "react";
import { instance } from "../api/instance";

export const useLocais = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  const execute = async (cidade, estado, regiao) => {
    try {
      const response = await instance.get("/locais");
      const data = await response.data;

      setLoading(false);
      setData(data);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  return {
    execute,
    data,
    loading,
    error,
  };
};
