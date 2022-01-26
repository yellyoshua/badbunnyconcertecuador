import { ConcertInfoReponse } from '../interfaces';

const endpoint = process.env.NEXT_PUBLIC_API_URL;

export const getFullConcertData = (): Promise<ConcertInfoReponse> => {
  if (!endpoint)
    throw new Error('NEXT_PUBLIC_API_URL environment variable not found');
  return fetch(endpoint).then((res) => res.json());
};
