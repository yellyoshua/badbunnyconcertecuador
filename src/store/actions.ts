import store from './index';
import { getFullConcertData } from '../api';
export const getConcertInfo = async () => {
  try {
    const { events } = await getFullConcertData();

    const concertLocation = events.location;
    const concertHost = events.host;
    const backdrop = events.image.default_url;
    const priceTiers = Array.isArray(events.price_tiers)
      ? events.price_tiers
      : [];
    const startAt = new Date(events.start_at);
    const endAt = new Date(events.end_at);
    const eventName = events.name;

    store.setState({
      concertLocation,
      concertHost,
      backdrop,
      priceTiers,
      startAt,
      endAt,
      loading: false,
      eventName
    });
  } catch (error) {
    console.log({ error });
  }
};
