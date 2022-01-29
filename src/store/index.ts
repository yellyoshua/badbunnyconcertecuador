import createStore from 'zustand';
import { devtools } from 'zustand/middleware';
import { GlobalStore } from '../interfaces';

const initialState: GlobalStore = {
  ticketSellStatus: {
    isPreSale: false,
    isOnSaleNow: false,
    isOnSaleSoon: true
  },
  eventName: null,
  concertLocation: null,
  concertHost: null,
  backdrop: null,
  priceTiers: [],
  timezone: 'America/Guayaquil',
  startAt: null,
  endAt: null,
  loading: true
};

export default createStore(
  devtools(() => initialState, { name: 'root-store' })
);
