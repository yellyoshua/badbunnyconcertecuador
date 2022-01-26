import { ConcertInfoReponse } from '../interfaces';

const endpoint = import.meta.env.VITE_API_URL;

export const getFullConcertData = (): Promise<ConcertInfoReponse> => {
  return fetch(endpoint).then((res) => res.json());
};
