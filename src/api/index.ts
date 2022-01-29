import { ConcertInfoReponse, SicketSellStatusResponse } from '../interfaces';

const endpoint = process.env.NEXT_PUBLIC_API_URL;
const statusEndpoint = process.env.CONCERT_STATUS_API_URL;

export const getTicketSellStatus = (): Promise<SicketSellStatusResponse> => {
  if (!statusEndpoint)
    throw new Error('CONCERT_STATUS_API_URL environment variable not found');
  return fetch(statusEndpoint).then((res) => res.json());
};

export const getFullConcertData = (): Promise<ConcertInfoReponse> => {
  if (!endpoint)
    throw new Error('NEXT_PUBLIC_API_URL environment variable not found');
  return fetch(endpoint).then((res) => res.json());
};
