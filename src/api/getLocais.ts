import { instance } from "./instance";

export const getLocais = async (handler: any) => {
  const response = await instance.get(`/locais`);
  const data = await response.data;

  handler ? handler(data) : null;

  return data;
};
