import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import Layout from '../src/components/Layout';
import Landing from '../src/components/Landing';
import Details from '../src/components/Details';
import Loading from '../src/components/Loading';
import { getFullConcertData } from '../src/api';
import { GlobalStore } from '../src/interfaces';
import store from '../src/store';
import 'dayjs/locale/es';

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('es');

const everyTenMinutes = 600;

interface PropTypes {
  concertInfo: GlobalStore;
}

export default function HomePage({ concertInfo }: PropTypes) {
  const loading = store((state) => state.loading);

  useEffect(() => {
    store.setState(concertInfo);
  }, []);

  if (loading) {
    return (
      <Layout title="Cuenta regresiva | Concierto Bad Bunny Ecuador">
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout title={`Cuenta regresiva | ${concertInfo.eventName} Ecuador`}>
      <Landing />
      <Details />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PropTypes> = async ({}) => {
  const { events } = await getFullConcertData();

  const concertLocation = events.location;
  const concertHost = events.host;
  const backdrop = events.image.default_url;
  const priceTiers = Array.isArray(events.price_tiers)
    ? events.price_tiers
    : [];
  const startAt = events.start_at;
  const endAt = events.end_at;
  const eventName = events.name;
  const timezone = events.timezone_name ?? 'America/Guayaquil';

  const concertInfo: GlobalStore = {
    concertLocation,
    concertHost,
    backdrop,
    priceTiers,
    startAt,
    endAt,
    loading: false,
    eventName,
    timezone
  };

  return {
    props: { concertInfo },
    revalidate: everyTenMinutes
  };
};
